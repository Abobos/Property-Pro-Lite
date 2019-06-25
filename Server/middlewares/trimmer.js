const trimmer = (req, res, next) => {
  const userData = {};
  Object.keys(req.body).forEach((property) => {
    const value = req.body[property];
    Object.assign(userData, { [property]: value.trim() });
  });
  req.body = userData;
  return next();
}

export default trimmer;
