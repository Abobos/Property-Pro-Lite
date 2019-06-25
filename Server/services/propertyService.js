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
}
