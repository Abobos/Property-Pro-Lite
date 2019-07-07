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

  async findPropertyWithOwnerId(propertyId, owner) {
    const sqlStatement = `SELECT * FROM ${this.table} WHERE id = $1 AND owner = $2`;
    const propertyDetails = await db.query(sqlStatement, [propertyId, owner]);
    return propertyDetails.rows[0];
  }

  async updateProperty(propertyId, newPrice, owner) {
    const sqlStatement = `UPDATE ${this.table} SET price = $1 WHERE id = $2 AND owner = $3 RETURNING *`;
    const updatedProperty = await db.query(sqlStatement, [newPrice, propertyId, owner]);
    return updatedProperty.rows[0];
  }

 async markPropertyAsSold(propertyId, owner) {
    const sqlStatement = `UPDATE ${this.table} SET status = $1 WHERE id = $2 AND owner = $3 RETURNING *`;
    const markedProperty = await db.query(sqlStatement, ['Sold', propertyId, owner]);
    return markedProperty.rows[0];
  }

  async deleteProperty(propertyId, owner) {
    const sqlStatement = `DELETE FROM ${this.table} WHERE id = $1 AND owner = $2 RETURNING *`;
    const deletedProperty = await db.query(sqlStatement, [propertyId, owner]);
    return deletedProperty.rows[0];
  }

  async getPropertiesAdvert() {
    const sqlStatement = `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.status, ${this.table}.type,
    ${this.table}.state, ${this.table}.city, ${this.table}.address, ${this.table}.price, ${this.table}.created_on,
    ${this.table}.image_url, users.email as ownerEmail, users.phoneNumber as ownerPhoneNUmber FROM ${this.table}, users
    WHERE users.id = ${this.table}.owner`;
    const propertyAdverts = await db.query(sqlStatement);
    return propertyAdverts.rows;
  }

  async getSpecificPropertiesAdvert(type) {
    const sqlStatement = `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.status, ${this.table}.type,
    ${this.table}.state, ${this.table}.city, ${this.table}.address, ${this.table}.price, ${this.table}.created_on,
    ${this.table}.image_url, users.email as ownerEmail, users.phoneNumber as ownerPhoneNUmber FROM ${this.table}, users
    WHERE users.id = ${this.table}.owner AND ${this.table}.type = $1`;
    const propertyAdverts = await db.query(sqlStatement, [type]);
    return propertyAdverts.rows;
  }

  findProperty(propertyId) {
    return this.properties.find(({ id }) => id === propertyId);
  }

  findPropertyIndex(propertyId) {
    return this.properties.findIndex(({ id }) => id === propertyId);
  }
}

export default new PropertyModel();
