import { model, Document, ObjectId } from 'mongoose';
import { IHero } from './heroes.model';
import { UsersSchema } from '../schemas/users.schema';

export interface IUser {
  _id?: ObjectId;
  nickname: string;
  email: string;
  password: string;
  heroes?: string[] | IHero[];
}

export const UsersModel = model<IUser & Document>('Users', UsersSchema);
