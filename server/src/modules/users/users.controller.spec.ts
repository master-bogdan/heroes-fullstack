import { request, randomString } from '../../common/test-utils/index';
import { connectDB, closeDB } from '../../db/connect';
import { config } from '../../config/config';
import { IUser } from '../../db/models/users.model';

const userId = '62546a3de40c5aa70ca4b1bc';
let user: Partial<IUser>;
let accessToken: string;

describe('[Auth Controller] - /api/v1/users', () => {
  beforeAll(async () => {
    const { MONGO_URI_TEST } = config();
    await connectDB(MONGO_URI_TEST);

    user = {
      nickname: 'Super Nickname2',
      password: 'anyNotLongPassword',
    };
  });

  afterAll(async () => {
    await closeDB();
  });

  it('+ GET get user by id', async () => {
    const res = await request
      .get(`/api/v1/users/${userId}`)
      .expect(200);

    expect(res.body).toEqual({
      message: 'Not authorized',
      statusCode: 401,
    });
  });

  it('+ GET current user', async () => {
    const res = await request
      .get(`/api/v1/users/${userId}`)
      .expect(200);

    expect(res.body).toEqual({
      message: 'Not authorized',
      statusCode: 401,
    });
  });

  it('+ GET update current user', async () => {
    const res = await request
      .get(`/api/v1/users/${userId}`)
      .expect(200);

    expect(res.body).toEqual({
      message: 'Not authorized',
      statusCode: 401,
    });
  });
});
