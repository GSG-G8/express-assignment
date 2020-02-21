const supertest = require('supertest');
const app = require('../app');

test('test for get request at /posts', (done) => {
  supertest(app).get('/posts').expect(200).expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('test for post request at /create-post', (done) => {
  supertest(app).post('/create-post').set('Content-Type', 'application/json').send(JSON.stringify({ post: 'Hi my name is ahmed' }))
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
