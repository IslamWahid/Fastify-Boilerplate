const fastify = require('../src/app');

afterEach(() => {
  fastify.close();
});

test('GET `/v1/keep-alive` route', async () => {
  const res = await fastify.inject({ method: 'GET', url: '/v1/keep-alive' });
  expect(res.statusCode).toEqual(200);
  expect(res.payload).toEqual('API is alive');
});
