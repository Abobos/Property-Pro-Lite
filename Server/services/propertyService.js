import propertyModel from '../models/propertyModel';
import todayDate from '../utils/dateFormater';

export default class PropertyService {
  static postPropertyAdvert(propertyDetails) {
    const {
      name, price, state, city, type, address, image_url: imageUrl,
    } = propertyDetails;
    const newPropertyAdvert = {
      id: propertyModel.properties.length + 1,
      owner: 9,
      name,
      status: 'Available',
      price,
      state,
      city,
      address,
      type,
      created_on: todayDate,
      image_url: imageUrl,
    };
    propertyModel.createProperty(newPropertyAdvert);
    return {
      code: 201,
      data: newPropertyAdvert,
    };
  }

  static updatePropertyAdvert(propertyId, propertyNewPrice) {
    const property = propertyModel.findProperty(+propertyId);
    if (!property) {
      return {
        code: 404,
        error: 'The property with the given ID does not exist',
      };
    }
    const propertyIndex = propertyModel.findPropertyIndex(+propertyId);
    propertyModel.properties[propertyIndex].price = propertyNewPrice;
    return {
      code: 200,
      data: property,
    };
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
      }
    };
    const propertyIndex = propertyModel.findPropertyIndex(+propertyId);
    propertyModel.deleteProperty(propertyIndex);
    return {
      code: 200,
      data: {
        message: 'Property advert deleted successfully',
      }
    }
  }

  static getPropertiesAdvert() {
    return {
      code: 200,
      data: propertyModel.properties,
    } 
  }
}

