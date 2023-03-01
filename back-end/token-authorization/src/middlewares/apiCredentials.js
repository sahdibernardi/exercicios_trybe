const fs = require('fs/promises');

module.exports = async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN'); // check if authToken in on header

  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' }); // reads authdata.json

  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    next(); // if token is in authFile, sends it to the next middleware
  } else {
    res.sendStatus(401); // if unauthorized, sends it to error 401.
  }
};
