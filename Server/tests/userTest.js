import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('POST /signup & /signin', () => {
  it('Should display a status of success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'giftaboboss@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
        done();
      });
  });
  it('Should display a status of success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'suspieabobo@yahoo.com',
        first_name: 'victory',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
        done();
      });
  });
  it('Should display an error message of "This email already exists" when exisitnguser wants to signup again', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftaboboss@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(409);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('This email already exists');
        done();
      });
  });
  
  it('Should display an error message of first_name is required, and it should contain only alphabets', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'bles33',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('first_name is required, and it should contain only alphabets');
        done();
      });
  });

  it('Should display an error message of last_name is required, and it should contain only alphabets', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo3',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('last_name is required, and it should contain only alphabets');
        done();
      });
  });

  it('Should display an error message of password is required, and it should be at least six characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('password is required, and it should be at least six characters');
        done();
      });
  });

  it('Should display an error message of password should contain at least one Uppercase letter, one lowercase letter, and at least one digit', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blesss',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
        done();
      });
  });

  it('Should display an error message of email is required, and it should be of the form; example@ymail.com', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('email is required, and it should be of the form; example@ymail.com');
        done();
      });
  });

  it('Should display an error message of phoneNumber is required, and it should be 11 characters - 08167679018, 07098987634', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless9',
        phoneNumber: '0816767201',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('phoneNumber is required, and it should be 11 characters - 08167679018, 07098987634');
        done();
      });
  });

  it('Should display an error message of phoneNumber is required, and it should be 11 characters - 08167679018, 07098987634', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless9',
        phoneNumber: '0816767201i',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('phoneNumber is required, and it should be 11 characters - 08167679018, 07098987634');
        done();
      });
  });

  it('Should display an error message of address is required', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless9',
        phoneNumber: '08167672019',
        address: '',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('address is required');
        done();
      });
  });

  it('Should display an error message of Please enter a valid address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Bless9',
        phoneNumber: '08167672019',
        address: '10',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Please enter a valid address');
        done();
      });
  });

  it('Should display an error message of email is required, and it should be of the form; example@ymail.com', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'giftabobo@gmail',
        password: 'Bless9',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('email is required, and it should be of the form; example@ymail.com');
        done();
      });
  });

  it('Should display an error message of password is required, and it should be at least six characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({ 
        email: 'giftabobo@gmail.com',
        password: 'Bless',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('password is required, and it should be at least six characters');
        done();
      });
  });

  it('Should display an error message of "password should contain at least one Uppercase letter, one lowercase letter, and at least one digit"', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({ 
        email: 'giftabobo@gmail.com',
        password: 'Blesss',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
        done();
      });
  });

  it('Should display an error message of "Invalid credentials"', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({ 
        email: 'giftabooss@gmail.com',
        password: 'Blessing9',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(401);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Invalid credentials');
        done();
      });
  });

  it('Should display an error message of "Invalid credentials"', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'giftaboboss@gmail.com',
        password: 'Blessin9',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(401);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Invalid credentials');
        done();
      });
  });

  it('Should display an sucess message "success"', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'giftaboboss@gmail.com',
        password: 'Blessing9',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
        done();
      });
  });

  it('should display an error message when user want enters an invalid email', (done)  => {
    chai.request(app)
      .post('/api/v1/auth/blessing/reset_password')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('please enter a valid email');
        done();
      });
  });
  
  it('should display an error message when user want enters an Invalid credentials', (done)  => {
    chai.request(app)
      .post('/api/v1/auth/susieb@yahoo.com/reset_password')
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Invalid credentials');
        done();
      });
  });

  it('should have a status code of 204', (done)  => {
    chai.request(app)
      .post('/api/v1/auth/suspieabobo@yahoo.com/reset_password')
      .end((err, res) => {
        expect(res.status).to.be.eql(204);
        done();
      });
  });
});
