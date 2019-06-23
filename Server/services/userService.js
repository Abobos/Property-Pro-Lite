import userModel from '../models/userModel';
import passwordHash from '../helpers/passwordHash';
import generateToken from '../middlewares/tokenHandler';

export default class userService {
  static signup(user) {
    const existingUser = userModel.findUser(user.email);
    if (existingUser) {
      return {
        code: 409,
        error: 'This email already exists',
      };
    } 
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phoneNumber,
      address,
    } = user;
    const hashedPassword = passwordHash.hashPassword(password);
    const newUser = {
      id: userModel.users.length + 1,
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      is_admin: false,
    }
    userModel.createUser(newUser);
    return {
      code: 201,
      data: {
        token: generateToken({ userId: newUser.id, userEmail: newUser.email }),
        id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
      },
    };
  }
}
