import sendErrorResponse, { sendSuccessResponse } from '../helpers/sendResponse';
import flagService from '../services/flagService';

export default class FlagController {
  static async flagPropertyAdvert(req, res) {
    const response = await flagService.flagPropertyAdvert(req.body, req.decoded.userId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  };
}
