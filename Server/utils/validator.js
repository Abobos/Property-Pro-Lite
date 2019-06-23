export default class Validators {
  // static isEmpty(string) {
  //   return /^$/.test(string);
  // }

  static isLength(string, length) {
    return string.length >= length;
  }

  static isName(name) {
    return /^[a-zA-Z]+$/.test(name);
  }

  static isEmail(email) {
    return /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
  }

  static isNumber(number) {
    return /^[0-9]+$/.test(number);
  }

  static isPassword(password) {
    return (/\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /^[a-zA-Z0-9]+$/.test(password));
  }

  static isAddress(address) {
    return /^[A-Za-z0-9\,\. \-]{5,30}$/.test(address);
  }
}
