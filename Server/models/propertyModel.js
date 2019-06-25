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


  // updateProperty(propertyPosition, updatedProperty) {
  //   this.properties.slice(propertyPosition, 1, updatedProperty);
  // }
 
  // removeProperty(propertyPosition) {
  //   this.properties.slice(propertyPosition, 1);
  // }

}

export default new PropertyModel();
