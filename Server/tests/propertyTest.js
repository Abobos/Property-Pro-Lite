import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import app from '../app';

chai.use(chaiHttp);

describe('POST api/v1/property', () => {
  const filepath = `${__dirname}/public/home5.jpg`;
  const filepathI = `${__dirname}/public/home4.gif`;
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift prope8rty')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', 'Gift8')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', 't3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });

  
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta9')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home4.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri9')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home4.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });
  
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '100')
      .attach('image', fs.readFileSync(filepath), 'home4.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepathI), 'home5.gif')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });
  it('Should display a success message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('name', 'gift property')
      .field('type', '3 bedroom')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});

