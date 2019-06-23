import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('POST api/v1/auth/signup', () => {
  it('Should display an error message of "This email already exists" when exisitnguser wants to signup again', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobos@gmail.com',
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
  it('Should display an error message of "This email already exists" when exisitnguser wants to signup again', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
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

  
  it('Should display an error message of "Email cannot be empty " when email is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: '',
        first_name: 'Blessing',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Email cannot be empty');
        done();
      });
  });


  it('Should display an error message of "FirstName cannot be empty " when first_name is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: '',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('FirstName cannot be empty');
        done();
      });
  });

  it('Should display an error message of "LastName cannot be empty " when last_name is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: '',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('LastName cannot be empty');
        done();
      });
  });

  it('Should display an error message of "password cannot be empty " when password is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: '',
        phoneNumber: '08167672019',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Password cannot be empty');
        done();
      });
  });

  it('Should display an error message of "Phone Number cannot be empty" when phone Number is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '',
        address: '10 Oladipupo Oduwole',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Phone Number cannot be empty');
        done();
      });
  });

  
  it('Should display an error message of "Address cannot be empty " when address is empty', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ 
        email: 'giftabobo@gmail.com',
        first_name: 'Gift',
        last_name: 'Abobo',
        password: 'Blessing9',
        phoneNumber: '08167672019',
        address: '',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('error');
        expect(res.body.error).to.eql('Address cannot be empty');
        done();
      });
  });

  
  it('Should display an error message of "FirstName should contain only alphabets"', (done) => {
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
        expect(res.body.error).to.eql('FirstName should contain only alphabets');
        done();
      });
  });

  it('Should display an error message of "LastName should contain only alphabets" when last_name is empty', (done) => {
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
        expect(res.body.error).to.eql('LastName should contain only alphabets');
        done();
      });
  });

  it('Should display an error message of "Password should be at least six characters"', (done) => {
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
        expect(res.body.error).to.eql('Password should be at least six characters');
        done();
      });
  });

  it('Should display an error message of "Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit"', (done) => {
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
        expect(res.body.error).to.eql('Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
        done();
      });
  });

  it('Should display an error message of "Email is not valid"', (done) => {
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
        expect(res.body.error).to.eql('Email is not valid');
        done();
      });
  });

  it('Should display an error message of "Phone Number should be at least 11 characters"', (done) => {
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
        expect(res.body.error).to.eql('Phone Number should be at least 11 characters');
        done();
      });
  });

  it('Should display an error message of "Your Phone Number is not valid"', (done) => {
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
        expect(res.body.error).to.eql('Your Phone Number is not valid');
        done();
      });
  });

  it('Should display an error message of "Your address is not vaild"', (done) => {
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
        expect(res.body.error).to.eql('Your address is not vaild');
        done();
      });
  });

});
