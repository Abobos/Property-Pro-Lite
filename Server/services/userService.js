import userModel from '../models/userModel';
import passwordHash from '../helpers/passwordHash';
import generateToken from '../middlewares/tokenHandler';

export default class userService {
  static signup(newUserEntry) {
    const existingUser = userModel.findUser(newUserEntry.email);
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
    } = newUserEntry;
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
    };
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

  static signin(userEntry) {
    const existingUser = userModel.findUser(userEntry.email);
    if (!existingUser) {
      return {
        code: 404,
        error: 'Invalid credentials',
      };
    }
    const hash = passwordHash.compareHashPassword(userEntry.password, existingUser.password);
    if (!hash) {
      return {
        code: 401,
        error: 'Invalid credentials',
      };
    }
    return {
      code: 200,
      data: {
        token: generateToken({ userId: existingUser.id, userEmail: existingUser.email }),
        id: existingUser.id,
        first_name: existingUser.first_name,
        last_name: existingUser.last_name,
        email: existingUser.email,
      },
    };
  }
}
