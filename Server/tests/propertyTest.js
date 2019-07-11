import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import app from '../app';

chai.use(chaiHttp);

let userToken;

const filepath = `${__dirname}/public/home5.jpg`;
const filepathI = `${__dirname}/public/home4.gif`;

describe('POST /signup & /signin', () => {
  it('Should display a status of success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'gtabos@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: 'No. 9 Omoru Street'
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
        const { token } = res.body.data;
        userToken = token;
        done();
      });
  });
});


describe('POST api/v1/property', () => {
  it('Should display a success message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', '')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('type', '3 bedroom')
      .field('contract_type', 'For Sale')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(403);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Please provide a token');
        done();
      });
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `${userToken}J`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('type', '3 bedroom')
      .field('contract_type', 'For Sale')
      .field('price', '3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(403);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Authentication Failed');
        done();
      });
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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

  it('Should display a success message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('type', '2 bedroom')
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
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('type is required, and it should be of the form: 3 bedroom, 2 bedroom, mini flat, etc.');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('price is required, it should be of the form; 3000000, 300000.90')
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('type', '3 bedroom')
      .field('price', 't3000000')
      .field('state', 'Delta')
      .field('city', 'Warri')
      .field('address', '10 Oladipupo Oduwole')
      .attach('image', fs.readFileSync(filepath), 'home5.jpg')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.error).to.eql('price is required, it should be of the form; 3000000, 300000.90')
        done();
      });
  });

  
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('state is required, and it should contain only alphabets e.g Delta, Lagos');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('city is required, and it should contain only alphabets e.g Warri, Ikeja');
        done();
      });
  });
  
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('address is required, and it should be valid');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
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
        expect(res.body.error).to.eql('only jpeg, jpg, and png image formats are accepted');
        done();
      });
  });
});

describe('PATCH api/v1/property/:propertyId', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/10')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        price: '889898.90',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist for you');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1')
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .patch('/api/v1/property/1')
      .set('Authorization', `Bearer ${userToken}`)
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

describe('PATCH api/v1/property/:propertyId/sold', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/13/sold')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist for you');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .patch('/api/v1/property/1/sold')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data.status).to.eql('Sold');
        done();
      });
  });
});

describe('POST api/v1/flag', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/flag')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        property_id: '3s',
        reason: 'weird demands',
        description: 'The demands are unwanted',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('property_id is required, and it should be valid');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/flag')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        property_id: '8',
        reason: 'weird demands',
        description: 'The demands are unwanted',
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
      .post('/api/v1/flag')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        property_id: '8',
        reason: '88',
        description: 'The demands are unwanted',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('reason is required, and it should be form; weird demands, pricing, etc.');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/flag')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        property_id: '8',
        reason: 'weird demands',
        description: '8',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('description is required, and it should be valid');
        done();
      });
  });

  it('Should display an error message', (done) => {
    chai.request(app)
      .post('/api/v1/flag')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        property_id: '1',
        reason: 'weird demands',
        description: 'The demands are unwanted',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data.message).to.eql('Property advert flagged successfully');
        done();
      });
  });
});

describe('DELETE api/v1/property/:propertyId', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .delete('/api/v1/property/13')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('The property with the given ID does not exist for you');
        done();
      });
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .delete('/api/v1/property/1')
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});

describe('GET api/v1/property?type=propertyType', () => {
  it('Should display an error message', (done) => {
    chai.request(app)
      .get('/api/v1/property')
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.be.eql('The property with the given ID does not exist');
        done();
      });
  });

  it('Should display a success message', (done) => {
    chai.request(app)
      .get('/api/v1/property/2')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        done();
      });
  });
});
