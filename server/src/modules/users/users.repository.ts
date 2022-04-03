import { UpdateWriteOpResult } from 'mongoose';
import { IUser, UsersModel } from '../../db/models/users.model';

interface IUsersRepository {
  findOne: (email: string) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
  update: (user: Partial<IUser>) => Promise<UpdateWriteOpResult>;
  delete: (email: string) => Promise<unknown>;
}

export class UsersRepository implements IUsersRepository {
  private readonly userModel = UsersModel;

  async findOne(email: string) {
    return this.userModel.findOne({ email });
  }

  async create(user: IUser) {
    return this.userModel.create(user);
  }

  async update(user: Partial<IUser>) {
    return this.userModel.updateOne({
      email: user.email,
    }, { ...user });
  }

  async delete(email: string) {
    return this.userModel.deleteOne({ email });
  }
}
