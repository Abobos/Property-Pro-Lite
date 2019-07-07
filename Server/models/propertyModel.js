import propertiesData from '../database/propertySeed';
import db from '../config/pool';

class PropertyModel {
  constructor() {
    this.properties = propertiesData;
    this.table = 'properties';
  }

  async postProperty(property, owner) {
    const {
      name, type, price, state, city, address, image_url: imageUrl,
    } = property;
    const sqlStatement = `INSERT INTO ${this.table} (owner, name, type, price, state, city, address, image_url)`;
    const placeholder = 'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const params = [owner, name, type, price, state, city, address, imageUrl];
    const propertyDetails = await db.query(`${sqlStatement} ${placeholder} RETURNING *`, params);
    return propertyDetails.rows[0];
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
