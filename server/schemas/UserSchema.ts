import {
  Document,
  Schema,
  model,
} from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  characters: string[];
  dateCreated: Date;
  token: string;
}

const userSchema = new Schema({
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
  characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
  dateCreated: {
    type: Date,
  },
  token: String,
});

export const UserSchema = model<IUser>('User', userSchema);
