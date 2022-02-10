import { UpdateWriteOpResult } from 'mongoose';
import { IUser } from './users.entity';
import { UsersRepository } from './users.repository';

interface IUsersService {
  findOne: (email: string) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
  update: (user: Partial<IUser>) => Promise<UpdateWriteOpResult>;
  delete: (email: string) => Promise<unknown>;
}

export const UsersService: IUsersService = ({
  create: async (user) => (UsersRepository.create(user)),
  findOne: async (email) => (UsersRepository.findOne(email)),
  update: async (user) => (UsersRepository.update(user)),
  delete: async (email) => (UsersRepository.delete(email)),
});
