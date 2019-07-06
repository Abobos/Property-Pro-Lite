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
        expect(res.body.error).to.eql('FirstName is not allowed to be empty, and it should contain only alphabets');
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
        expect(res.body.error).to.eql('LastName is not allowed to be empty, and it should contain only alphabets');
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
        expect(res.body.error).to.eql('Please enter a valid email');
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
        expect(res.body.error).to.eql('Please enter a valid address');
        done();
      });
  });

  // it('Should display an error message of "Email is not valid"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({
  //       email: 'giftabobo@gmail',
  //       password: 'Bless9',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(400);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('error');
  //       expect(res.body.error).to.eql('Please enter a valid email');
  //       done();
  //     });
  // });

  // it('Should display an error message of "Password should be at least six characters"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({ 
  //       email: 'giftabobo@gmail.com',
  //       password: 'Bless',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(400);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('error');
  //       expect(res.body.error).to.eql('Password should be at least six characters');
  //       done();
  //     });
  // });

  // it('Should display an error message of "Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({ 
  //       email: 'giftabobo@gmail.com',
  //       password: 'Blesss',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(400);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('error');
  //       expect(res.body.error).to.eql('Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
  //       done();
  //     });
  // });

  // it('Should display an error message of "Invalid credentials"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({ 
  //       email: 'giftabos@gmail.com',
  //       password: 'Blessing9',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(404);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('error');
  //       expect(res.body.error).to.eql('Invalid credentials');
  //       done();
  //     });
  // });

  // it('Should display an error message of "Invalid credentials"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({ 
  //       email: 'giftabobos@gmail.com',
  //       password: 'Blessin9',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(401);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('error');
  //       expect(res.body.error).to.eql('Invalid credentials');
  //       done();
  //     });
  // });

  // it('Should display an sucess message "success"', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signin')
  //     .send({ 
  //       email: 'giftabobos@gmail.com',
  //       password: 'Blessing9',
  //     })
  //     .end((err, res) => {
  //       expect(res.status).to.be.eql(200);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.status).to.eql('success');
  //       expect(res.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email');
  //       done();
  //     });
  // });
});
