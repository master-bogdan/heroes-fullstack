import { UpdateWriteOpResult } from 'mongoose';
import { SessionsModel, SessionsType } from '../../../db/models/sessions.model';

interface ISessionData {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

interface ISessionService {
  createSession(data: ISessionData): Promise<SessionsType>;
  findSession(userId: string): Promise<SessionsType | null>;
  updateSession(data: ISessionData): Promise<UpdateWriteOpResult>;
  deleteSession(refreshToken: string): Promise<SessionsType | null>;
}

export class SessionsService implements ISessionService {
  async createSession({ userId, accessToken, refreshToken }: ISessionData) {
    return SessionsModel.create({
      userId,
      accessToken,
      refreshToken,
    });
  }

  async findSession(userId: string) {
    return SessionsModel.findOne({ userId });
  }

  async updateSession({ userId, accessToken, refreshToken }: ISessionData) {
    return SessionsModel.updateOne({ _id: userId }, {
      accessToken,
      refreshToken,
    });
  }

  async deleteSession(refreshToken: string) {
    return SessionsModel.findOneAndDelete({ refreshToken });
  }
}
