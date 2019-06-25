import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class Property {
  static postProperty(req, res, next) {
    const {
      name, price, type, state, city, address,
    } = req.body;
    const { path } = req.files[0];
    const imagePath = path.split('\\')[1];
    if (!validator.isPropertyName(name)) return sendErrorResponse(res, 400, 'Property Name is not allowed to be empty, and it should contain only alphabets e.g Gold Apartments, Silver Buildings, Dapper Houses, Edifice');
    if (isNaN(price)) return sendErrorResponse(res, 400, 'Price is not allowed to be empty, and it should be of the form: 3000000, 300000.90');
    if (!validator.isPropertyType(type)) return sendErrorResponse(res, 400, 'Property Type is not allowed to be empty, and it should be of the form: 3 bedroom, 2 bedroom, mini flat, etc.');
    if (!validator.isName(state)) return sendErrorResponse(res, 400, 'State is not allowed to be empty, and it should contain only alphabets e.g Delta, Lagos');
    if (!validator.isName(city)) return sendErrorResponse(res, 400, 'City is not allowed to be empty, and it should contain only alphabets e.g Warri, Ikeja');
    if (!validator.isAddress(address)) return sendErrorResponse(res, 400, 'Address is not valid');
    if (!validator.isImageType(imagePath)) return sendErrorResponse(res, 400, 'Only jpeg, jpg, and png image formats are accepted');
    return next();
  }
}
