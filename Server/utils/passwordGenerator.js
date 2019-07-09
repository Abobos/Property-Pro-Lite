import dotenv from 'dotenv';

dotenv.config();
const { UNIQUE_DIGIT: uniqueDigit } = process.env;

const generatePassword = (string) => {
  const sanitizedString = string.replace(/\s/g, '');
  const length = 3;
  let randomString = '';
  for (let i = 0; i < length; i += 1) {
    randomString += uniqueDigit.charAt(Math.floor(Math.random() * uniqueDigit.length));
  }
  return `${sanitizedString}${randomString}`;
};

export default generatePassword;
