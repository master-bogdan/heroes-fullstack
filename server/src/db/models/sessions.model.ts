import { model, Document } from 'mongoose';
import { SessionsSchema } from '../schemas/sessions.schema';

export interface ISession {
  userId: string
  accessToken: string
  refreshToken: string
}

export type SessionsType = ISession & Document;

export const SessionsModel = model<SessionsType>('Sessions', SessionsSchema);
