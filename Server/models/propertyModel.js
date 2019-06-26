import propertiesData from '../database/propertySeed';

class PropertyModel {
  constructor() {
    this.properties = propertiesData;
  }

  createProperty(property) {
    this.properties.push(property);
  }

  findProperty(propertyId) {
    return this.properties.find(({ id }) => id === propertyId);
  }

  findPropertyIndex(propertyId) {
    return this.properties.findIndex(({ id }) => id === propertyId);
  }

  deleteProperty(propertyPosition) {
    this.properties.splice(propertyPosition, 1);
  }
}

export default new PropertyModel();
