import propertiesData from '../database/propertySeed';

class PropertyModel {
  constructor() {
    this.properties = propertiesData;
  }

  createProperty(property) {
    this.properties.push(property);
  }

    // findProperty(propertyId) {
  //   return this.properties.find(({ id }) => id === propertyId);
  // }

  // findPropertyIndex(propertyId) {
  //   return this.properties.findIndex(({ id }) => id === propertyId);
  // }

  // removeProperty(propertyPosition) {
  //   this.properties.slice(propertyPosition, 1);
  // }

  // updateProperty(propertyPosition, updatedProperty) {
  //   this.properties.slice(propertyPosition, 1, updatedProperty);
  // }
}

export default new PropertyModel();
