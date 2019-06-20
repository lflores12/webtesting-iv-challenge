const supertest = require('supertest');



const server = require('./server.js');

describe('server', () => {
  describe('GET /', () => {
    // asynchronous test need to either return the promise
    it('responds with 200 OK', () => {
      return supertest(server)
        .get('/')
        .expect(200);
        });

    it("responds { message: Its working! }", async () => {
        await supertest(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: "Its working!" });
          });
        });
    });
});