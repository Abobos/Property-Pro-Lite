import userModel from '../models/userModel';
import passwordHash from '../helpers/passwordHash';
import generateToken from '../middlewares/tokenHandler';

export default class userService {
  static async signup(newUserDetails) {
    try {
      const existingUser = await userModel.dbFindUser(newUserDetails.email);
      if (existingUser) {
        return {
          code: 409,
          error: 'This email already exists',
        };
      }
      const {
        first_name: firstName, last_name: lastName, email, password, phoneNumber, address,
      } = newUserDetails;
      const hashedPassword = await passwordHash.hashPassword(password);
      const newUser = {
        first_name: firstName,
        last_name: lastName,
        email,
        password: hashedPassword,
        phoneNumber,
        address,
      };
      const userDetails = await userModel.createUser(newUser);
      return {
        code: 201,
        data: {
          token: generateToken({ userId: userDetails.id, userEmail: userDetails.email, isAdmin: userDetails.is_admin }),
          id: userDetails.id,
          first_name: userDetails.first_name,
          last_name: userDetails.last_name,
          email: userDetails.email,
        },
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async signin(userEntry) {
    const existingUser = userModel.findUser(userEntry.email);
    if (!existingUser) {
      return {
        code: 404,
        error: 'Invalid credentials',
      };
    }
    const hash = await passwordHash.compareHashPassword(userEntry.password, existingUser.password);
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
