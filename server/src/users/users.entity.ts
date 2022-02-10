import {
  Document,
  Schema,
  model,
} from 'mongoose';
import { ICharacter } from '../characters/characters.entity';

export interface IUser extends Document {
  nickName: string;
  email: string;
  password: string;
  characters: ICharacter[];
}

const schema = new Schema<IUser>({
  nickName: {
    type: String,
    required: true,
    unique: true,
    min: 1,
    max: 50,
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
  },
  characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
});

export const UsersEntity = model<IUser>('Users', schema);
