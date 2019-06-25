import sendErrorResponse, { sendSuccessResponse } from '../helpers/sendResponse';
import propertyService from '../services/propertyService';

export default class PropertyController {
  static postPropertyAdvert(req, res) {
    const response = propertyService.postPropertyAdvert(req.body);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }
}
