import sendErrorResponse, { sendSuccessResponse } from '../helpers/sendResponse';
import propertyService from '../services/propertyService';

export default class PropertyController {
  static async postPropertyAdvert(req, res) {
    const response = await propertyService.postPropertyAdvert(req.body, req.decoded.userId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static async updatePropertyAdvert(req, res) {
    const { propertyId } = req.params;
    const { price } = req.body;
    const response = await propertyService
      .updatePropertyAdvert(propertyId, price, req.decoded.userId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static async markPropertyAdvert(req, res) {
    const { propertyId } = req.params;
    const response = await propertyService.markPropertyAdvert(propertyId, req.decoded.userId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static async deletePropertyAdvert(req, res) {
    const { propertyId } = req.params;
    const response = await propertyService.deletePropertyAdvert(propertyId, req.decoded.userId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static async getSpecificPropertiesAdvert(query) {
    const response = await propertyService.getSpecificPropertiesAdvert(query);
    return response;
  }

  static async getPropertiesAdvert(req, res) {
    let response;
    if (req.query.type) response = await PropertyController.getSpecificPropertiesAdvert(req.query);
    else {
      response = await propertyService.getPropertiesAdvert();
    }
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }

  static getSpecificPropertyDetails(req, res) {
    const { propertyId } = req.params;
    const response = propertyService.getSpecificPropertyDetails(propertyId);
    if (response.error) return sendErrorResponse(res, response.code, response.error);
    return sendSuccessResponse(res, response.code, response.token, response.data);
  }
}
