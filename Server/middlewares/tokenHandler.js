import jwt from 'jsonwebtoken';
import sendErrorResponse from '../helpers/sendResponse';

const generateToken = userDetails => jwt.sign(userDetails, process.env.JWT_KEY, { expiresIn: '2h' });

export const verifyToken = (req, res, next) => {
  try {
    const err = 'Please provide a token';
    if (!req.headers.authorization) throw err;
    const token = req.headers.authorization.split(' ')[1] || req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.decoded = decoded;
    next();
  } catch (err) {
    const error = err.message ? 'Something went wrong' : err;
    sendErrorResponse(res, 403, error);
  }
};

export default generateToken;