'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
},
);

describe('Testing our server routes', () => {
  test('Testing the handles create route', async () => {
    const response = await request.post('/teacher').send({name: 'Mrs. Smith', classroom: 1, studentId: 1});
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Mrs. Smith');
  },
  );
});
