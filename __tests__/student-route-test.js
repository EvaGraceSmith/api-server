'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const { get } = require('../src/routes/student');
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

  test('get a single student', async () => {
    const response = await request.get('/student/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Eva');
    expect(response.body.grade).toEqual(9);
  },
  );

  test('update a student', async () => {
    const response = await request.put('/student/1').send({
      name: 'Eva',
      grade: 9,
      subject: 'math',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Eva');
    expect(response.body.grade).toEqual(9);
    expect(response.body.subject).toEqual('math');

  },
  );

  // tests get /studentWithTeacher
  // tests get /studentWithSingleTeacher/:id

  test('/studentWithTeacher', async () => {
    const response = await request.get('/studentWithTeacher');
    expect(response.status).toEqual(200);
    console.log('response.body', response.body);
    expect(response.body[0].name).toEqual('Eva');
    expect(response.body[0].grade).toEqual(9);
  },
  );

  test('/studentWithSingleTeacher/:id', async () => {

    const response = await request.get('/studentWithSingleTeacher/1');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Eva');
    expect(response.body[0].grade).toEqual(9);
  },
  );


  test('delete a student', async () => {
    const response = await request.delete('/student/1');
    expect(response.status).toEqual(200);
  },
  );




});





