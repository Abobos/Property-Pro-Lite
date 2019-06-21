import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from './server';

chai.use(chaiHttp);

describe('App', () => {
  it('Should display a welcome to Property Pro', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to Property Pro');
        done();
      });
  });
});
