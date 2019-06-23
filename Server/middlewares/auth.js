import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class Auth {
  static trimmer(req, res, next) {
    const userData = {};
    Object.keys(req.body).forEach((property) => {
      const value = req.body[property];
      Object.assign(userData, { [property]: value.trim() });
    });
    req.body = userData;
    return next();
  }

  static signup(req, res, next) {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phoneNumber,
      address,
    } = req.body;
    if (validator.isEmpty(firstName)) return sendErrorResponse(res, 400, 'FirstName cannot be empty');
    if (validator.isEmpty(lastName)) return sendErrorResponse(res, 400, 'LastName cannot be empty');
    if (validator.isEmpty(email)) return sendErrorResponse(res, 400, 'Email cannot be empty');
    if (validator.isEmpty(password)) return sendErrorResponse(res, 400, 'Password cannot be empty');
    if (validator.isEmpty(phoneNumber)) return sendErrorResponse(res, 400, 'Phone Number cannot be empty');
    if (validator.isEmpty(address)) return sendErrorResponse(res, 400, 'Address cannot be empty');
    if (!validator.isName(firstName)) return sendErrorResponse(res, 400, 'FirstName should contain only alphabets');
    if (!validator.isName(lastName)) return sendErrorResponse(res, 400, 'LastName should contain only alphabets');
    if (!validator.isLength(password, 6)) return sendErrorResponse(res, 400, 'Password should be at least six characters');
    if (!validator.isPassword(password)) return sendErrorResponse(res, 400, 'Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
    if (!validator.isEmail(email)) return sendErrorResponse(res, 400, 'Email is not valid');
    if (!validator.isLength(phoneNumber, 11)) return sendErrorResponse(res, 400, 'Phone Number should be at least 11 characters');
    if (!validator.isNumber(phoneNumber)) return sendErrorResponse(res, 400, 'Your Phone Number is not valid');
    if (!validator.isAddress(address)) return sendErrorResponse(res, 400, 'Your address is not vaild');
    return next();
  }
}
