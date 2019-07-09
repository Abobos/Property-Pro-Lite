import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class Auth {
  static signup(req, res, next) {
    const {
      first_name: firstName, last_name: lastName, email, password, phoneNumber, address,
    } = req.body;
    if (!firstName || !validator.isName(firstName)) return sendErrorResponse(res, 400, 'first_name is required, and it should contain only alphabets');
    if (!lastName || !validator.isName(lastName)) return sendErrorResponse(res, 400, 'last_name is required, and it should contain only alphabets');
    if (!password || !validator.isLength(password, 6)) return sendErrorResponse(res, 400, 'password is required, and it should be at least six characters');
    if (!validator.isPassword(password)) return sendErrorResponse(res, 400, 'password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
    if (!email || !validator.isEmail(email)) return sendErrorResponse(res, 400, 'email is required, and it should be of the form; example@ymail.com');
    if (!phoneNumber || !validator.isPhoneNumber(phoneNumber)) return sendErrorResponse(res, 400, 'phoneNumber is required, and it should be 11 characters - 08167679018, 07098987634');
    if (!address) return sendErrorResponse(res, 400, 'address is required');
    if (!validator.isAddress(address)) return sendErrorResponse(res, 400, 'Please enter a valid address');
    return next();
  }

  static signin(req, res, next) {
    const { email, password } = req.body;
    if (!email || !validator.isEmail(email)) return sendErrorResponse(res, 400, 'email is required, and it should be of the form; example@ymail.com');
    if (!password || !validator.isLength(password, 6)) return sendErrorResponse(res, 400, 'password is required, and it should be at least six characters');
    if (!validator.isPassword(password)) return sendErrorResponse(res, 400, 'password should contain at least one Uppercase letter, one lowercase letter, and at least one digit');
    return next();
  }

  static resetPassword(req, res, next) {
    const { user_email: userEmail } = req.params;
    if (!validator.isEmail(userEmail)) return sendErrorResponse(res, 400, 'please enter a valid email');
    return next();
  }
}
