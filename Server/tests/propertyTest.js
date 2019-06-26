import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import app from '../app';

chai.use(chaiHttp);

describe('POST api/v1/property', () => {
  const filepath = `${__dirname}/public/home5.jpg`;
  const filepathI = `${__dirname}/public/home4.gif`;
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
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
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
      .field('price', '')
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
});

describe('PATCH api/v1/property/:propertyId', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/10')
      .send({ 
        price: '889898.90',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1')
      .send({ 
        price: '889898.9s',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Please enter a valid price e.g 30000000, 30054400.9');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1')
      .send({ 
        price: '',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Price is not allowed to be empty');
        done();
      })
  });
  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1s')
      .send({ 
        price: '889898.90',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Please enter a valid property ID');
        done();
      })
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/8')
      .send({ 
        price: '889898.90',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});

describe('PATCH api/v1/property/:propertyId', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/13/sold')
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1/sold')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data.status).to.eql('sold');
        done();
      });
  });
});

describe('DELETE api/v1/property/:propertyId', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .delete('/api/v1/property/13')
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist');
        done();
      });
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .delete('/api/v1/property/8')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data.message).to.eql('Property advert deleted successfully');
        done();
      });
  });
});

describe('GET api/v1/property', () => {
  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});

describe('GET api/v1/property?type=propertyType', () => {
  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property')
      .query({type: '3 Bedroom'})
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });
  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property')
      .query({type: '3 bedroom'})
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});

describe('GET api/v1/property/:propertyId', () => {
  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property/14')
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        done();
      });
  });
  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property/5')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});
