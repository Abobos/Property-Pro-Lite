import bcrypt from 'bcrypt';

export default class PasswordHash {
  static hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  static compareHashPassword(rawPassword, hashedPassword) {
    return bcrypt.compare(rawPassword, hashedPassword);
  }
}