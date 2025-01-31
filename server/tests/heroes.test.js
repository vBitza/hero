import server from '../server.js';
import axios from 'axios';

beforeAll(async () => {
  await server();
});

test('Check the Initial Superheroes have been loaded', async () => {
  const response = await axios.get('http://localhost:2000/superheroes');
  expect(response.status).toBe(200);
  console.log(response.data);
  expect(response.data.length).toBeGreaterThan(0);
});
