import { request } from '../../common/test-utils/index';
import { connectDB, closeDB } from '../../db/connect';
import { config } from '../../config/config';
import { IUser } from '../../db/models/users.model';

const userId = '62546a3de40c5aa70ca4b1bc';
let user: Partial<IUser>;
let accessToken: string;

describe('[Users Controller] - /api/v1/users', () => {
  beforeAll(async () => {
    const { MONGO_URI_TEST } = config().DB;
    await connectDB(MONGO_URI_TEST);

    user = {
      nickname: 'Super Nickname2',
      password: 'anyNotLongPassword',
    };

    const res = await request
      .post('/api/v1/auth/login')
      .send({ ...user })
      .expect(200);

    accessToken = res.body.accessToken;
  });

  it('+ GET get user by id', async () => {
    const res = await request
      .get(`/api/v1/users/${userId}`)
      .expect(200);

    expect(res.body).toHaveProperty('_id', userId);
    expect(res.body).toHaveProperty('heroes');
    expect(res.body).toHaveProperty('nickname');
    expect(res.body).toHaveProperty('email');
  });

  it('+ POST get current user', async () => {
    const res = await request
      .post('/api/v1/users/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(res.body).toHaveProperty('_id', userId);
    expect(res.body).toHaveProperty('heroes');
    expect(res.body).toHaveProperty('nickname');
    expect(res.body).toHaveProperty('email');
  });

  it('+ Patch update current user', async () => {
    user = {
      nickname: 'Super Nickname',
    };

    const res = await request
      .patch('/api/v1/users/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ...user })
      .expect(206);

    expect(res.body).toHaveProperty('_id', userId);
    expect(res.body).toHaveProperty('nickname', user.nickname);
  });

  afterAll(async () => {
    await request
      .patch('/api/v1/users/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        nickname: 'Super Nickname2',
      })
      .expect(206);

    await request
      .get('/api/v1/auth/logout')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    await closeDB();
  });
});
