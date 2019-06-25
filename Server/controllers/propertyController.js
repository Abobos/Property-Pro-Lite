import sendErrorResponse, { sendSuccessResponse } from '../helpers/sendResponse';
import propertyService from '../services/propertyService';

export default class PropertyController {
  static postPropertyAdvert(req, res) {
    const response = propertyService.postPropertyAdvert(req.body);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static updatePropertyAdvert(req, res) {
    const { propertyId } = req.params;
    const { price } = req.body;
    const response = propertyService.updatePropertyAdvert(propertyId, price);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }
}
