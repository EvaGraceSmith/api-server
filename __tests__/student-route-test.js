'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
},
);

afterAll(async () => {
  await sequelizeDatabase.drop();
},
);

describe('Testing our student routes', () => {
  test('create a student', async () => {
    const response = await request.post('/student').send({
      name: 'Eva',
      grade: 9,
      subject: 'math',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Eva');
    expect(response.body.grade).toEqual(9);
    expect(response.body.subject).toEqual('math');
  });


  test('get all students', async () => {
    const response = await request.get('/student');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Eva');
    expect(response.body[0].grade).toEqual(9);
  },
  );

},
);




