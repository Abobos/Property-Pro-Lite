import userModel from '../models/userModel';
import passwordHash from '../helpers/passwordHash';
import generateToken from '../middlewares/tokenHandler';
import generatePassword from '../utils/passwordGenerator';
import sentenceCase from '../utils/sentenceCase';
import MailHandler from '../utils/sendEmail';
import validator from '../utils/validator';

export default class userService {
  static async signup(newUserDetails) {
    try {
      const existingUser = await userModel.findUser(newUserDetails.email);
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
        first_name: sentenceCase(firstName),
        last_name: sentenceCase(lastName),
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
    try {
      const existingUser = await userModel.findUser(userEntry.email);
      if (!existingUser) {
        return {
          code: 404,
          error: 'Invalid credentials',
        };
      }
      const hashValue = await passwordHash.compareHashPassword(userEntry.password, existingUser.password);
      if (!hashValue) {
        return {
          code: 404,
          error: 'Invalid credentials',
        };
      }
      return {
        code: 200,
        data: {
          token: generateToken({ userId: existingUser.id, userEmail: existingUser.email, isAdmin: existingUser.is_admin }),
          id: existingUser.id,
          first_name: existingUser.first_name,
          last_name: existingUser.last_name,
          email: existingUser.email,
        },
      };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }

  static async resetPassword(request) {
    try {
      const { user_email: userEmail } = request.params;
      const existingUser = await userModel.findUser(userEmail);
      if (!existingUser) {
        return {
          code: 404,
          error: 'Invalid credentials',
        };
      }
      const { old_password: oldPassword, new_password: newPassword } = request.body;
      if (!oldPassword && !newPassword) {
        const password = generatePassword(`${existingUser.first_name} ${existingUser.last_name}`);
        const response = await MailHandler.sendEmail(existingUser.email, existingUser.first_name, password);
        if (response  === 'success') {
          const hashedPassword = await passwordHash.hashPassword(password);
          const updatedUserDetails = await userModel.updateUser(hashedPassword, existingUser.email);
          if (updatedUserDetails) return { code: 200, status: 204 };
        } else {
          return {
            code: 500,
            error: 'Network issue: Something went wrong',
          };
        }
      }
      if (!validator.isPassword(newPassword)) {
        return {
          code: 422,
          error: 'password should contain at least one Uppercase letter, one lowercase letter, and at least one digit',
        };
      }
      const hashValue = await passwordHash.compareHashPassword(oldPassword, existingUser.password);
      if (!hashValue) {
        return {
          code: 422,
          error: 'your password is incorrect',
        };
      }
      const hashedPassword = await passwordHash.hashPassword(newPassword);
      const updatedUser = await userModel.updateUser(hashedPassword, existingUser.email);
      if (updatedUser) return { code: 200, status: 204 };
    } catch (err) {
      return {
        code: 500,
        error: 'Something went wrong',
      };
    }
  }
}
