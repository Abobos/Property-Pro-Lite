import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class Auth {
  static signup(req, res, next) {
    const {
      first_name: firstName, last_name: lastName, email, password, phoneNumber, address,
    } = req.body;
    if (!validator.isName(firstName)) return sendErrorResponse(res, 400, 'FirstName is not allowed to be empty, and it should contain only alphabets');
    if (!validator.isName(lastName)) return sendErrorResponse(res, 400, 'LastName is not allowed to be empty, and it should contain only alphabets');
    if (!validator.isLength(password, 6)) return sendErrorResponse(res, 400, 'Password should be at least six characters');
    if (!validator.isPassword(password)) return sendErrorResponse(res, 400, 'Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
    if (!validator.isEmail(email)) return sendErrorResponse(res, 400, 'Please enter a valid email');
    if (!validator.isLength(phoneNumber, 11)) return sendErrorResponse(res, 400, 'Phone Number should be at least 11 characters');
    if (!validator.isNumber(phoneNumber)) return sendErrorResponse(res, 400, 'Your Phone Number is not valid');
    if (!validator.isAddress(address)) return sendErrorResponse(res, 400, 'Please enter a valid address');
    return next();
  }

  static signin(req, res, next) {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) return sendErrorResponse(res, 400, 'Please enter a valid email');
    if (!validator.isLength(password, 6)) return sendErrorResponse(res, 400, 'Password should be at least six characters');
    if (!validator.isPassword(password)) return sendErrorResponse(res, 400, 'Password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
    return next();
  }
}
