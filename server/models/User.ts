import {
  Document,
  Schema,
  model,
} from 'mongoose';
import { ICharacter } from './Character';

export interface IUser extends Document {
  email: string
  password: string
  characters: ICharacter[]
  dateCreated: Date,
  token: string
}

const CharacterSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  characters: [CharacterSchema],
  dateCreated: {
    type: Date,
  },
  token: String,
});

export const User = model<IUser>('User', UserSchema);
