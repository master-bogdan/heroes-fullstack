import supertest, { SuperTest, Test } from 'supertest';
import { Express } from 'express';
import { ExpressApp } from '../../bootstrap';
import { closeDB } from '../../db/connect';

let server: Express;
let request: SuperTest<Test>;

beforeAll(async () => {
  const App = await ExpressApp;
  server = App;
  request = supertest(server);
});
afterAll(async () => {
  await closeDB();
});

describe('[app] - check starting app', () => {
  it('+ should return 200', async () => {
    const res = await request
      .get('/api/v1/health')
      .expect(200);

    expect(res.body.message).toEqual('Api is working');
  });
});
