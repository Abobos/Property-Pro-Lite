import propertyModel from '../models/propertyModel';

export default class PropertyService {
  static async postPropertyAdvert(newPropertyDetails, ownerId) {
    try {
      const propertyDetails = await propertyModel.postProperty(newPropertyDetails, ownerId);
      return {
        code: 201,
        data: propertyDetails,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async updatePropertyAdvert(propertyId, propertyNewPrice, ownerId) {
    try {
      const property = await propertyModel.findPropertyWithOwnerId(+propertyId, ownerId);
      if (!property) {
        return {
          code: 404,
          error: 'The property with the given ID does not exist for you',
        };
      }
      const propertyUpdatedDetails = await propertyModel
        .updateProperty(+propertyId, propertyNewPrice, ownerId);
      return {
        code: 200,
        data: propertyUpdatedDetails,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }
  
  static async markPropertyAdvert(propertyId, ownerId) {
    try {
      const property = await propertyModel.findPropertyWithOwnerId(+propertyId, ownerId);
      if (!property) {
        return {
          code: 404,
          error: 'The property with the given ID does not exist for you',
        };
      }
      const propertyUpdatedDetails = await propertyModel.markPropertyAsSold(+propertyId, ownerId);
      return {
        code: 200,
        data: propertyUpdatedDetails,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async deletePropertyAdvert(propertyId, owner) {
    try {
      const property = await propertyModel.findPropertyWithOwnerId(+propertyId, owner);
      if (!property) {
        return {
          code: 404,
          error: 'The property with the given ID does not exist for you',
        };
      }
      const deletedPropertyDetails = await propertyModel.deleteProperty(+propertyId, owner);
      if (deletedPropertyDetails) {
        return {
          code: 200,
          data: {
            message: 'Property advert deleted successfully',
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

  static async getPropertiesAdvert() {
    try {
      const propertyAdverts = await propertyModel.getPropertiesAdvert();
      return {
        code: 200,
        data: propertyAdverts,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async getSpecificPropertiesAdvert(query) {
    try {
      const { type } = query;
      const properties = await propertyModel.getSpecificPropertiesAdvert(type);
      return {
        code: 200,
        data: properties,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async getSpecificPropertyDetails(propertyId) {
    try {
      const propertyDetails = await propertyModel.getProperty(+propertyId);
      if (!propertyDetails) {
        return {
          code: 404,
          error: 'The property with the given ID does not exist',
        };
      }
      return {
        code: 200,
        data: propertyDetails,
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }
}
