import jwt from 'jsonwebtoken';

const generateToken = userDetails => jwt.sign(userDetails, process.env.JWT_KEY, { expiresIn: '2h' });

export default generateToken;