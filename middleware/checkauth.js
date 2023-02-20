const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const verify = jwt.verify(token, 'this is dummy text');
    next();
    console.log(token);
  } catch (error) {
    return res.status(200).json({ mesg: 'invalid token' });
  }
};
