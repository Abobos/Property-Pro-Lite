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
  
  static markPropertyAdvert(propertyId) {
    const property = propertyModel.findProperty(+propertyId);
    if (!property) {
      return {
        code: 404,
        error: 'The property with the given ID does not exist',
      };
    }
    const propertyIndex = propertyModel.findPropertyIndex(+propertyId);
    propertyModel.properties[propertyIndex].status = 'sold';
    return {
      code: 200,
      data: property,
    };
  }

  static deletePropertyAdvert(propertyId) {
    const property = propertyModel.findProperty(+propertyId);
    if (!property) {
      return {
        code: 404,
        error: 'The property with the given ID does not exist',
      };
    }
    const propertyIndex = propertyModel.findPropertyIndex(+propertyId);
    propertyModel.deleteProperty(propertyIndex);
    return {
      code: 200,
      data: {
        message: 'Property advert deleted successfully',
      },
    };
  }

  static getPropertiesAdvert() {
    return {
      code: 200,
      data: propertyModel.properties,
    };
  }

  static getSpecificPropertiesAdvert(query) {
    const properties = propertyModel.properties.filter(({ type }) => type === query.type);
    return {
      code: 200,
      data: properties,
    };
  }

  static getSpecificPropertyDetails(propertyId) {
    const property = propertyModel.findProperty(+propertyId);
    if (!property) {
      return {
        code: 404,
        error: 'The property with the given ID does not exist',
      };
    }
    return {
      code: 200,
      data: property,
    };
  }
}
