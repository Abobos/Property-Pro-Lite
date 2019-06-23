import usersData from '../database/userSeed';

class UserModel {
  constructor() {
    this.users = usersData;
  }
  
  findUser(userEmail) {
    const existingUser = this.users.find(({ email }) => email === userEmail);
    return existingUser;
  }

  createUser(newUser) {
    this.users.push(newUser);
  }
}

export default new UserModel();
