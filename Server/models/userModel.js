import db from '../config/pool';

class UserModel {
  constructor() {
    this.table = 'users';
  }

  async findUser(userEmail) {
    const sqlStatement = `SELECT id, first_name, last_name, email, is_admin, password FROM ${this.table} WHERE email = $1`;
    const params = [userEmail];
    const result = await db.query(sqlStatement, params);
    return result.rows[0];
  }

  async createUser(newUser) {
    const {
      first_name: firstName, last_name: lastName, email, password, phoneNumber, address,
    } = newUser;
    const sqlStatement = `INSERT INTO ${this.table} (first_name, last_name, email, password, phoneNumber, address) 
                           VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const params = [firstName, lastName, email, password, phoneNumber, address];
    const result = await db.query(sqlStatement, params);
    return result.rows[0];
  }
}

export default new UserModel();
