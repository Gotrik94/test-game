import AuthService from './services/authService';

const authService = new AuthService('http://localhost:3000');

// Esempio di utilizzo
authService.login('exampleUser', 'examplePassword').subscribe({
  next: data => {
    console.log('Login successful:', data);
    const token = data.access_token;

    // Usare il token per ottenere i dati dell'utente
    authService.getUserData(token).subscribe({
      next: userData => {
        console.log('User data:', userData);
      },
      error: err => {
        console.error('Error getting user data:', err.message);
      }
    });
  },
  error: err => {
    console.error('Login failed:', err.message);
  }
});
