import db from '../config/pool';

class FlagModel {
  constructor() {
    this.table = 'flags';
  }

  async createAdvert(flagDetails, userId) {
    const { property_id: propertyId, reason, description } = flagDetails;
    const sqlStatement = `INSERT INTO ${this.table} (property_id, reason, description, reported_by) 
                          VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = await db.query(sqlStatement, [+propertyId, reason, description, userId]);
    return result.rows[0];
  }
}

export default new FlagModel();
