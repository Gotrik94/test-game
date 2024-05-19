import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import axios from 'axios';

class AuthService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  login(username: string, password: string): Observable<any> {
    return from(axios.post(`${this.apiUrl}/auth/login`, { username, password }))
      .pipe(
        map(response => response.data),
        catchError(error => {
          throw new Error(error.response.data);
        })
      );
  }

  getUserData(token: string): Observable<any> {
    return from(axios.get(`${this.apiUrl}/users/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }))
      .pipe(
        map(response => response.data),
        catchError(error => {
          throw new Error(error.response.data);
        })
      );
  }
}

export default AuthService;