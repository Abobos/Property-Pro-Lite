import validator from '../utils/validator';
import sendErrorResponse from '../helpers/sendResponse';

export default class flagAuth {
  static validateFlagDetails(req, res, next) {
    const { property_id: propertyId, reason, description } = req.body;
    if (!propertyId || !validator.isNumber(propertyId)) return sendErrorResponse(res, 422, 'property_id is required, and it should be valid');
    if (!reason || !validator.isText(reason)) return sendErrorResponse(res, 422, 'reason is required, and it should be form; weird demands, pricing, etc.');
    if (!description || !validator.isText(description)) return sendErrorResponse(res, 422, 'description is required, and it should be valid');
    return next();
  };
}
