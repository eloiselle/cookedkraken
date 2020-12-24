//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../../../src/startServer";


import Ingredient from '../../../src/rest/Ingredient/Ingredient';
import * as IngredientCtrl from '../../../src/rest/Ingredient/RequestAboutIngredient';

const should = chai.should();

chai.use(chaiHttp);

function ingredientCarrot() {
  return new Ingredient({ name: "George", password: "hunter2", phone: "819-555-5555", email: "george@yahoo.com" })
}

function ingredientStick() {
  return new Ingredient({ name: "Natalie", password: "1234", phone: "819-555-1234", email: "nat@gmail.com" })
}

//Our parent block
describe('Ingredient', () => {

  beforeEach((done) => { //Before each test we empty the database
    IngredientCtrl.clearTable()
    done()
  });

  /* Test the /GET/ route */
  describe('/GET ingredient', () => {
    it('it should GET all the ingredients', (done) => {
      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .get('/ingredient')
        .end((res: any) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  /* Test the /POST/ route */
  describe('/POST ingredient', () => {
    it('it should not POST an ingredient without pages field', (done) => {
      let ingredient = ingredientCarrot()
      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .post('/ingredient')
        .send(ingredient)
        .end((res: any) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('pages');
          res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });
    it('it should POST a user ', (done) => {
      let ingredient = ingredientCarrot()
      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .post('/ingredient')
        .send(ingredient)
        .end((res: any) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('ingredient successfully added!');
          res.body.IngredientCtrl.should.have.property('name');
          res.body.IngredientCtrl.should.have.property('password');
          res.body.IngredientCtrl.should.have.property('email');
          res.body.IngredientCtrl.should.have.property('phone');
          done();
        });
    });
  });
  /* Test the /GET/:id route */
  describe('/GET/:id ingredient', () => {
    it('it should GET an ingredient by the given id', (done) => {
      let ingredient = ingredientCarrot()
      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .get('/ingredient/' + ingredient.id_ingredient)
        .send(ingredient)
        .end((res: any) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('password');
          res.body.should.have.property('email');
          res.body.should.have.property('phone');
          res.body.should.have.property('_id').eql(ingredient.id_ingredient);
          done();
        });


    });
  });
  /* Test the /PUT/:id route */
  describe('/PUT/:id ingredient', () => {
    it('it should UPDATE an ingredient given the id', (done) => {
      let ingredient = ingredientCarrot()

      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .put('/ingredient/' + ingredient.id_ingredient)
        .send(ingredientStick())
        .end((res: any) => {
          res.should.have.status(204);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Ingredient updated!');
          res.body.IngredientCtrl.should.have.property('name').eql("Natalie");
          done();
        });

    });
  });
  /* Test the /DELETE/:id route */
  describe('/DELETE/:id user', () => {
    it('it should DELETE a user given the id', (done) => {
      let user = ingredientStick()

      //@ts-ignore Bug, will compile anyways
      chai.request(app)
        .delete('/user/' + user.id_ingredient)
        .end((res: any) => {
          res.should.have.status(204);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User successfully deleted!');
          res.body.result.should.have.property('ok').eql(1);
          res.body.result.should.have.property('n').eql(1);
          done();
        });

    });
  });
});

