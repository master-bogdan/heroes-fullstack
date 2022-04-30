import { request, randomString } from '../../common/test-utils/index';
import { connectDB, closeDB } from '../../db/connect';
import { config } from '../../config/config';
import { IUser } from '../../db/models/users.model';

let registeredUser: Partial<IUser>;
let newUser: IUser;
let invalidUser: IUser;
let accessToken: string;

describe('[Auth Controller] - /api/v1/auth', () => {
  beforeAll(async () => {
    const { MONGO_URI_TEST } = config().DB;
    await connectDB(MONGO_URI_TEST);

    registeredUser = {
      nickname: 'Super Nickname2',
      password: 'anyNotLongPassword',
    };

    newUser = {
      nickname: randomString(),
      email: `${randomString()}@test.com`,
      password: 'anyNotLongPassword',
    };

    invalidUser = {
      nickname: '',
      email: 'test.com',
      password: 'an',
    };
  });

  describe('#Register - /api/v1/auth/register', () => {
    it('+ POST - should register new user and return registered user', async () => {
      const res = await request
        .post('/api/v1/auth/register')
        .send({ ...newUser })
        .expect(201);

      expect(res.body.nickname).toEqual(newUser.nickname);
      expect(res.body.email).toEqual(newUser.email);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('password');
    });

    it('- [/register] POST should return error that user exist', async () => {
      const res = await request
        .post('/api/v1/auth/register')
        .send({ ...newUser })
        .expect(400);

      expect(res.body).toEqual({
        message: 'User with this email or nickname exist!',
        statusCode: 400,
      });
    });

    it('- [/register] POST should return error', async () => {
      const res = await request
        .post('/api/v1/auth/register')
        .send({ ...invalidUser })
        .expect(406);

      expect(res.body).toEqual({
        errors: [
          {
            error: 'Email not valid',
            field: 'email',
          },
          {
            error: 'Password length must be between 3 and 20 characters',
            field: 'password',
          },
          {
            error: 'Nickname length must be between 3 and 15 characters',
            field: 'nickname',
          },
        ],
        message: 'Invalid request parameters',
        statusCode: 406,
      });
    });
  });

  describe('#Login - /api/v1/auth/login', () => {
    it('+ POST - should login user and return access token', async () => {
      const res = await request
        .post('/api/v1/auth/login')
        .send({
          nickname: registeredUser.nickname,
          password: registeredUser.password,
        })
        .expect(200);

      expect(res.body).toHaveProperty('accessToken');
      accessToken = res.body.accessToken;
    });

    it('- POST - should return Invalid request parameters error', async () => {
      const res = await request
        .post('/api/v1/auth/login')
        .send({
          nickname: invalidUser.nickname,
          password: invalidUser.password,
        })
        .expect(406);

      expect(res.body).toEqual({
        errors: [
          {
            error: 'Password length must be between 3 and 20 characters',
            field: 'password',
          },
          {
            error: 'Nickname length must be between 3 and 15 characters',
            field: 'nickname',
          },
        ],
        message: 'Invalid request parameters',
        statusCode: 406,
      });
    });

    it('- POST - should return User not found error', async () => {
      const res = await request
        .post('/api/v1/auth/login')
        .send({
          nickname: randomString(),
          password: randomString(),
        })
        .expect(404);

      expect(res.body).toEqual({
        message: 'User not found',
        statusCode: 404,
      });
    });

    it('- POST - should return wrong password error', async () => {
      const res = await request
        .post('/api/v1/auth/login')
        .send({
          nickname: registeredUser.nickname,
          password: randomString(),
        })
        .expect(403);

      expect(res.body).toEqual({
        message: 'Wrong password',
        statusCode: 403,
      });
    });
  });

  describe('#Refresh tokens - /api/v1/auth/token', () => {
    it('+ GET - should refresh tokens', async () => {
      const res = await request
        .get('/api/v1/auth/token')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(res.body).toHaveProperty('accessToken');
      accessToken = res.body.accessToken;
    });

    it('- GET - should return access token invalid error', async () => {
      const res = await request
        .get('/api/v1/auth/token')
        .set('Authorization', `Bearer ${accessToken}s`)
        .expect(403);

      expect(res.body).toEqual({
        message: 'Access token invalid',
        statusCode: 403,
      });
    });
  });

  describe('#Logout - /api/v1/auth/logout', () => {
    it('+ GET - should logout user', async () => {
      const res = await request
        .get('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(res.body).toHaveProperty('logout', true);
    });

    it('- GET - should return unauthorized error', async () => {
      const res = await request
        .get('/api/v1/auth/logout')
        .expect(401);

      expect(res.body).toEqual({
        message: 'Not authorized',
        statusCode: 401,
      });
    });
  });

  afterAll(async () => {
    return closeDB();
  });
});
