const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check of no token

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // take req object and assign value to user
    req.user = decoded.user;
    // user comes from payload
    console.log(req.user);
    console.log(decoded.user);
    // { id: '5db92b4c89c26b399ca4be73' }
    // { id: '5db92b4c89c26b399ca4be73' }
    next();
  } catch (err) {
    // If there is a token but is not valid
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
