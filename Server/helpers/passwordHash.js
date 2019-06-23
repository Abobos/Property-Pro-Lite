import bcrypt from 'bcrypt';

export default class PasswordHash {
  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static compareHashPassword(rawPassword, hashedPassword) {
    return bcrypt.compareSync(rawPassword, hashedPassword);
  }
}