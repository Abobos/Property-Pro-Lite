export default class MagicValidator {
  // static trimmer(req, res, next) {
  //   if (req.body) {
  //     const userData = {};
  //     Object.keys(req.body).forEach((property) => {
  //       const value = req.body[property];
  //       Object.assign(userData, { [property]: value.trim() });
  //     });
  //     req.body = userData;
  //   }
  //   return next();
  // }

  static transformEmail(req, res, next) {
    if (req.body.email) {
      const email = req.body.email.toLowerCase();
      req.body.email = email;
    } else {
      const email = req.params.user_email.toLowerCase();
      req.params.user_email = email;
    }
    return next();
  }
}
