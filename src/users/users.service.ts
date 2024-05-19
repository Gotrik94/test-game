import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'test',
      password: 'test', // Usa un hash robusto per le password in produzione
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
}
