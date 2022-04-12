import { request } from '../../common/test-utils/index';

describe('[Health Controller] - /api/v1/health', () => {
  it('+ GET Should return object with message "Api is working"', async () => {
    const res = await request
      .get('/api/v1/health')
      .expect(200);

    expect(res.body.message).toEqual('Api is working');
  });
});
