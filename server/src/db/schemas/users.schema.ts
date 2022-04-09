import { Schema } from 'mongoose';
import { IUser } from '../models/users.model';

export const UsersSchema: Schema<IUser> = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 40,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 80,
    select: false,
  },
  heroes: [{ type: Schema.Types.ObjectId, ref: 'Heroes' }],
}, {
  timestamps: true,
});
