import { UpdateWriteOpResult } from 'mongoose';
import { IUser, UsersEntity } from './users.entity';

interface IUsersRepository {
  findOne: (email: string) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
  update: (user: Partial<IUser>) => Promise<UpdateWriteOpResult>;
  delete: (email: string) => Promise<unknown>;
}

export const UsersRepository: IUsersRepository = ({
  findOne: async (email) => (UsersEntity.findOne({ email })),
  create: async (user: IUser) => (UsersEntity.create(user)),
  update: async (user: Partial<IUser>) => (UsersEntity.updateOne({
    email: user.email,
  }, { ...user })),
  delete: async (email) => (UsersEntity.deleteOne({ email })),
});
