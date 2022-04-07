import { FilterQuery, UpdateWriteOpResult, Document } from 'mongoose';
import { IUser, UsersModel } from '../../db/models/users.model';

interface IUsersRepository {
  findOne: (filter?: FilterQuery<IUser & Document<any, any, any>>) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
  update: (user: Partial<IUser>) => Promise<UpdateWriteOpResult>;
  delete: (email: string) => Promise<unknown>;
}

export class UsersRepository implements IUsersRepository {
  private readonly userModel = UsersModel;

  async findOne(filter?: FilterQuery<IUser & Document<any, any, any>>) {
    return this.userModel.findOne(filter, {
      password: 0,
    });
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
