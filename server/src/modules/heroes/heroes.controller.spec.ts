import { request, randomString } from '../../common/test-utils/index';
import { connectDB, closeDB } from '../../db/connect';
import { config } from '../../config/config';
import { IUser } from '../../db/models/users.model';
import { IHero } from '../../db/models/heroes.model';

const userId = '62546a3de40c5aa70ca4b1bc';
let user: Partial<IUser>;
let validHero: IHero;
let unvalidHero: IHero;
let accessToken: string;

describe('[Heroes Controller] - /api/v1/heroes', () => {
  beforeAll(async () => {
    const { MONGO_URI_TEST } = config();
    await connectDB(MONGO_URI_TEST);

    user = {
      nickname: 'Super Nickname2',
      password: 'anyNotLongPassword',
    };

    validHero = {
      title: 'Test hero',
      description: randomString(12),
      imageUrl: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
    };

    unvalidHero = {
      title: '',
      description: '',
      imageUrl: 'https://images.sftcdn.net',
      ownerId: userId,
    };

    const res = await request
      .post('/api/v1/auth/login')
      .send({ ...user })
      .expect(200);

    accessToken = res.body.accessToken;
  });

  it('+ POST - should create hero', async () => {
    const res = await request
      .post('/api/v1/heroes')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ...validHero })
      .expect(201);

    expect(res.body).toHaveProperty('_id', res.body._id);
    expect(res.body).toHaveProperty('title', validHero.title);
    expect(res.body).toHaveProperty('description', validHero.description);
    expect(res.body).toHaveProperty('imageUrl', validHero.imageUrl);
    expect(res.body).toHaveProperty('ownerId', userId);

    validHero = res.body;
  });

  it('- POST - should return an invalid error when try create hero', async () => {
    const res = await request
      .post('/api/v1/heroes')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ ...unvalidHero })
      .expect(406);

    expect(res.body).toEqual({
      errors: [
        {
          error: 'Title length must be more than 3 characters',
          field: 'title',
        },
        {
          error: 'Description must be more than 10 characters',
          field: 'description',
        },
      ],
      message: 'Invalid request parameters',
      statusCode: 406,
    });
  });

  it('+ POST - should return single hero', async () => {
    const res = await request
      .get(`/api/v1/heroes/${validHero._id}`)
      .expect(200);

    expect(res.body).toHaveProperty('_id', validHero._id);
    expect(res.body).toHaveProperty('title', validHero.title);
    expect(res.body).toHaveProperty('description', validHero.description);
    expect(res.body).toHaveProperty('imageUrl', validHero.imageUrl);
    expect(res.body).toHaveProperty('ownerId', userId);
  });

  it('+ POST - should return all heroes with pagination', async () => {
    const res = await request
      .get('/api/v1/heroes')
      .expect(200);

    expect(res.body.heroes.length).not.toBeGreaterThan(5);
  });

  afterAll(async () => {
    await closeDB();
  });
});
