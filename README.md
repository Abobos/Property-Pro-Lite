[![Build Status](https://travis-ci.org/Abobos/Property-Pro-Lite.svg?branch=develop)](https://travis-ci.org/Abobos/Property-Pro-Lite)
[![Coverage Status](https://coveralls.io/repos/github/Abobos/Property-Pro-Lite/badge.svg?branch=develop)](https://coveralls.io/github/Abobos/Property-Pro-Lite?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/93ed75ea6b4c7a99978a/maintainability)](https://codeclimate.com/github/Abobos/Property-Pro-Lite/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/93ed75ea6b4c7a99978a/test_coverage)](https://codeclimate.com/github/Abobos/Property-Pro-Lite/test_coverage)

# Property-Pro-Lite

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

## Features

### Required Features

- User can sign up
- User can sign in
- User (agent) can post a property advert
- User (agent) can update the details of a property advert
- User (agent) can mark his/her property advert as sold
- User (agent) can delete a property advert
- User can view all properties advert
- User can view all properties advert of a specific type - 3 bedroom, 2 bedroom, mini flat, etc.
- User can view a specific property advert

### Optional Features

- User can reset password
- flag/report a posted AD as fradulent
- User can add multiple pictures to a posted ad
- The application should display a goole map with marker showing the red-flag location

#### Tools

##### Dev Tools

- HTML
- CSS
- JAVASCRIPT(Node.js)

##### Testing Framework

- Mocha
- Chai
- Chai-HTTP

##### Project Management

- Pivotal Tracker

##### Continuous Integration

- Travis CI
- Coveralls

#### API Docs

- [Swagger](https://propertyprolite1.herokuapp.com/api-docs)

#### Getting Started

To setup Property Pro Lite, These tools should be installed in your PC

- [Node js](https://nodejs.org/en/download/)
- [Insonmia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/)
- [Git](https://git-scm.com/downloads)

#### Prerequisties

To wield the features of Property Pro Lite, follow these steps

- Create an account on [cloudinary](https://cloudinary.com)
- Obtain your cloudinary url

* Create a folder in your PC called PropertyProLite(I find this appropos),
  #### N.B
  - You can use any name of your choice.

#### Installing

- Clone this repo
- Open the
- Rename .env-sample to .env
- Enter your JWT_KEY and CLOUDINARY_URL
  ##### N.B
  - Erase the CLOUDINARY_URL placeholder
  * Your JWT_KEY can be any string value e.g "secret",
  * Your CLOUDINARY_URL should be the URL specified in your cloudinary account. It contains your cloud_name, api_key, and api_secret.

* Open terminal
* Run `npm install`

### Running the app

- Run `npm run dev:start`

### Running the tests

- Run `npm test`

### License

This project is authored by [Blessing Makaraba](https://github.com/abobos) and is licensed to use under the MIT License - see the [License.md](https://github.com/Abobos/Property-Pro-Lite/blob/develop/LICENSE) file for details

### Acknowledgments

- I learnt how to use cloudinary [here](https://cloudinary.com/documentation/node_integration)

* I learnt how to document my api [here](https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b)
