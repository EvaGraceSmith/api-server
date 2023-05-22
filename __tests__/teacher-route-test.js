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

    test('create a teacher route', async () => {
    const response = await request.post('/teacher').send({
      name: 'Mrs. Smith',
      classroom: 1,
      studentId: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Mrs. Smith');
    expect(response.body.classroom).toEqual(1);
    expect(response.body.studentId).toEqual(1);
  },
  );


  test('Testing the handles get route', async () => {
    const response = await request.get('/teacher');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Mrs. Smith');
    expect(response.body[0].classroom).toEqual(1);
    expect(response.body[0].studentId).toEqual(1);
  },
  );

  test('Testing the handles get route', async () => {
    const response = await request.get('/teacher/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Mrs. Smith');
    expect(response.body.classroom).toEqual(1);
    expect(response.body.studentId).toEqual(1);
  },
  );

  test('Testing the handles update route', async () => {
    const response = await request.put('/teacher/1').send({
      name: 'Mrs. Smith',
      classroom: 1,
      studentId: 1,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Mrs. Smith');
    expect(response.body.classroom).toEqual(1);
    expect(response.body.studentId).toEqual(1);
  },
  );

  test('Testing the handles delete route', async () => {
    const response = await request.delete('/teacher/1');
    expect(response.status).toEqual(200);
  },
  );


});


