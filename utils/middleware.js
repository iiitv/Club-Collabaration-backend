function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({error:'Unauthorized'});
}

module.exports = {
  isLoggedIn
}