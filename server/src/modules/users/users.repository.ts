import { FilterQuery, Document } from 'mongoose';
import { IUser, UsersModel } from '../../db/models/users.model';

interface IUsersRepository {
  findOne: (
    filter?: FilterQuery<IUser & Document<any, any, any>>, isPassword?: boolean
  ) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
  update: (user: Partial<IUser>) => Promise<IUser | null>;
  delete: (email: string) => Promise<unknown>;
}

export class UsersRepository implements IUsersRepository {
  private readonly userModel = UsersModel;

  async findOne(filter?: FilterQuery<IUser & Document<any, any, any>>, isPassword = false) {
    return this.userModel.findOne(filter, {
      password: isPassword,
    });
  }

  async create(user: IUser) {
    return this.userModel.create(user);
  }

  async update(user: Partial<IUser>) {
    return this.userModel.findOneAndUpdate(
      {
        _id: user._id,
      },
      {
        ...user,
      },
      {
        new: true,
        fields: {
          password: false,
        },
      },
    );
  }

  async delete(email: string) {
    return this.userModel.deleteOne({ email });
  }
}
