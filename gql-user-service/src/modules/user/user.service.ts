import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  private userList: User[] = [
    {
      id: 1,
      age: 23,
      name: 'Jaime Logan',
    },
    {
      id: 2,
      age: 45,
      name: 'Jerome Johnson',
    },
    {
      id: 3,
      age: 66,
      name: 'Alice Wonderland',
    },
    {
      id: 4,
      age: 12,
      name: 'Johnnie Brosco',
    },
    {
      id: 5,
      age: 88,
      name: 'Nelson Mandela',
    },
  ];

  findAll = (): User[] => [...this.userList];

  findUserByIdAndName = (id: number, name: string): User =>
    this.userList.find((user) => user.id === Number(id) && user.name === name);

  findById = (id: number): User =>
    this.userList.find((user) => user.id === Number(id));
}
