import { Schema } from 'mongoose';
import { ISession } from '../models/sessions.model';

export const SessionsSchema: Schema<ISession> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  accessToken: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});
