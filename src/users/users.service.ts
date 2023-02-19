import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Gede' },
    { id: 1, name: 'Kadek' },
    { id: 2, name: 'Komang' },
    { id: 3, name: 'Ketut' },
  ];

  findAll(_name?: string): User[] {
    if (_name) {
      return this.users.filter(
        (user) => user.name.toLowerCase() === _name.toLowerCase(),
      );
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id == userId);
  }

  createUser(user: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }
}
