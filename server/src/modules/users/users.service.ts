import { UsersRepository } from './users.repository';
import { IUser } from '../../db/models/users.model';

interface IUsersService {
  findOneUser: ({
    email, nickname, userId,
  }: {
    email?: string; nickname?: string, userId?: string, isPassword?: boolean
  }) => Promise<IUser | null>;
  createUser: (user: IUser) => Promise<IUser | null>;
  updateUser: (user: Partial<IUser>) => Promise<IUser | null>;
  deleteUser: (email: string) => Promise<unknown>;
}

export class UsersService implements IUsersService {
  usersRepository = new UsersRepository();

  async createUser(user: IUser) {
    return this.usersRepository.create(user);
  }

  async findOneUser({
    email,
    nickname,
    userId,
    isPassword = false,
  }: { email?: string; nickname?: string, userId?: string, isPassword?: boolean }) {
    return this.usersRepository.findOne({
      $or: [{ email }, { nickname }, { _id: userId }],
    }, isPassword);
  }

  async updateUser(user: Partial<IUser>) {
    return this.usersRepository.update(user);
  }

  async deleteUser(email: string) {
    return this.usersRepository.delete(email);
  }
}
