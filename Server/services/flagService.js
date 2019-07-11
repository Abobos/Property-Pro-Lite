import propertyModel from '../models/propertyModel';
import flagModel from '../models/flagModel';

export default class flagService {
  static async flagPropertyAdvert(flagDetails, userId) {
    try {
      const { property_id: propertyId } = flagDetails;
      const propertyDetails = await propertyModel.getProperty(+propertyId);
      if (!propertyDetails) {
        return {
          code: 404,
          error: 'The property with the given ID does not exist',
        };
      }
      const flaggedDetails = await flagModel.createAdvert(flagDetails, +userId);
      if (flaggedDetails) {
        return {
          code: 201,
          data: {
            message: 'Property advert flagged successfully',
          },
        };
      }
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }
}
