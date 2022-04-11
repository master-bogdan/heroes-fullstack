import supertest from 'supertest';
import { app } from '../../app';
import { connectDB, closeDB, cleanDB } from '../../db/connect';
import { config } from '../../config/config';
import { IUser } from '../../db/models/users.model';

const request = supertest(app);
let user: IUser;

describe('[Auth Controller] - /api/v1/auth', () => {
  beforeAll(async () => {
    const { MONGO_URI_TEST } = config();
    const connection = await connectDB(MONGO_URI_TEST);
    await cleanDB(connection);

    user = {
      nickname: 'Super Nickname2',
      email: 'supertest2@test.com',
      password: 'anyNotLongPassword',
    };
  });

  it('+ [/register] POST should register user and return registered user', async () => {
    const res = await request
      .post('/api/v1/auth/register')
      .send({ ...user })
      .expect(201);

    expect(res.body.nickname).toEqual(user.nickname);
    expect(res.body.email).toEqual(user.email);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('password');
  });

  it('- [/register] POST should return error that user exist', async () => {
    const res = await request
      .post('/api/v1/auth/register')
      .send({ ...user })
      .expect(400);

    expect(res.body).toEqual({
      message: 'User with this email or nickname exist!',
      statusCode: 400,
    });
  });

  afterAll(async () => {
    await closeDB();
  });
});
