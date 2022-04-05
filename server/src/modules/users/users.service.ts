import { UpdateWriteOpResult } from 'mongoose';
import { UsersRepository } from './users.repository';
import { IUser } from '../../db/models/users.model';

interface IUsersService {
  findOneUser: ({
    email, nickname,
  }: { email?: string; nickname?: string }) => Promise<IUser | null>;
  createUser: (user: IUser) => Promise<IUser | null>;
  updateUser: (user: Partial<IUser>) => Promise<UpdateWriteOpResult>;
  deleteUser: (email: string) => Promise<unknown>;
}

export class UsersService implements IUsersService {
  usersRepository = new UsersRepository();

  async createUser(user: IUser) {
    return this.usersRepository.create(user);
  }

  async findOneUser({ email, nickname }: { email?: string; nickname?: string }) {
    return this.usersRepository.findOne({
      $or: [{ email }, { nickname }],
    });
  }

  async updateUser(user: Partial<IUser>) {
    return this.usersRepository.update(user);
  }

  async deleteUser(email: string) {
    return this.usersRepository.delete(email);
  }
}
