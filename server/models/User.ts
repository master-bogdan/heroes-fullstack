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
  characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
  dateCreated: {
    type: Date,
  },
  token: String,
});

export const User = model<IUser>('User', UserSchema);
