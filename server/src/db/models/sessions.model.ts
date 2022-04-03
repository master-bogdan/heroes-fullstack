import { model, Document } from 'mongoose';
import { SessionsSchema } from 'db/schemas/sessions.schema';

export interface ISession {
  userId: string
  accessToken: string
  refreshToken: string
}

export const SessionsModel = model<ISession & Document>('Sessions', SessionsSchema);
