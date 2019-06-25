import usersData from '../database/userSeed';

class UserModel {
  constructor() {
    this.users = usersData;
  }
  
  findUser(userEmail) {
    return this.users.find(({ email }) => email === userEmail);
  }

  createUser(newUser) {
    this.users.push(newUser);
  }
}

export default new UserModel();
