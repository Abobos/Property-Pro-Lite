import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class Property {
  static postProperty(req, res, next) {
    const {
      name, price, type, state, city, address,
    } = req.body;
    const { path: imagePath } = req.files[0];
    if (!validator.isPropertyName(name)) return sendErrorResponse(res, 400, 'Property Name is not allowed to be empty, and it should contain only alphabets e.g Gold Apartments, Silver Buildings, Dapper Houses, Edifice');
    if (validator.isEmpty(price)) return sendErrorResponse(res, 400, 'Price is not allowed to be empty');
    if (isNaN(price)) return sendErrorResponse(res, 400, 'Price is not allowed to be empty, and it should be of the form: 3000000, 300000.90');
    if (!validator.isPropertyType(type)) return sendErrorResponse(res, 400, 'Property Type is not allowed to be empty, and it should be of the form: 3 bedroom, 2 bedroom, mini flat, etc.');
    if (!validator.isName(state)) return sendErrorResponse(res, 400, 'State is not allowed to be empty, and it should contain only alphabets e.g Delta, Lagos');
    if (!validator.isName(city)) return sendErrorResponse(res, 400, 'City is not allowed to be empty, and it should contain only alphabets e.g Warri, Ikeja');
    if (!validator.isAddress(address)) return sendErrorResponse(res, 400, 'Address is not valid');
    if (!validator.isImageType(imagePath)) return sendErrorResponse(res, 400, 'Only jpeg, jpg, and png image formats are accepted');
    return next();
  }

  static propertyId(req, res, next) {
    const { propertyId } = req.params;
    if (!validator.isNumber(propertyId)) return sendErrorResponse(res, 400, 'Please enter a valid property ID');
    return next();
  }

  static updateProperty(req, res, next) {
    const { price } = req.body;
    if (validator.isEmpty(price)) return sendErrorResponse(res, 400, 'Price is not allowed to be empty');
    if (isNaN(price)) return sendErrorResponse(res, 400, 'Please enter a valid price e.g 30000000, 30054400.9');
    return next();
  }
  
  static getProperties(req, res, next) {
    if (req.query.type) {
      const { type } = req.query;
      if (!validator.isPropertyType(type)) return sendErrorResponse(res, 400, 'Please enter a valid property type, it should be of the form: 4 bedroom, 3 bedroom, 2 bedroom, mini flat, etc.');
    } 
    return next();
  }
}
