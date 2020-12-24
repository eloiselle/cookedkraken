//Require the dev-dependencies
import chai from 'chai';
import * as chaiHttp from 'chai-http';

import * as server from "../../src/startServer.js";

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);
describe('Pages', () => {

  //@ts-ignore Bug, will compile anyways
  const app = chai.request(server.app)

  function get200(path: string, done: any) {
    //@ts-ignore Bug, will compile anyways
    chai.request(server.app).get(path).end((err: Error, res: any) => {
      res.should.have.status(200)
      done();
    });
  }

  // Public
  it('favicon.ico should be accessible',
    (done) => get200("/favicon.ico", done));

  it('style.css should be accessible',
    (done) => get200("/style.css", done));

  // pages

  it('index should be accessible',
    (done) => get200("/index", done));

  it('login should be accessible',
    (done) => get200("/login", done));

  it('register should be accessible',
    (done) => get200("/register", done));


  // Forms

  it('favorites should be accessible',
    (done) => get200("/favorites", done));

  it('inventory should be accessible',
    (done) => get200("/inventory", done));

  it('recipes should be accessible',
    (done) => get200("/recipes", done));

  it('suggestions should be accessible',
    (done) => get200("/suggestions", done));

});