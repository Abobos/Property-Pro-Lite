import userService from '../services/userService';
import sendErrorResponse, { sendSuccessResponse } from '../helpers/sendResponse';

export default class UserController {
  static signup(req, res) {
    const response = userService.signup(req.body);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }
}