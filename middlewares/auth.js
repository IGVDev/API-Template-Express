const jwt = require("jsonwebtoken");
const dotevent = require("dotenv");

dotevent.config();

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET);
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    res.status(401).send("Token missing");
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Not authorized");

    req.user = user;

    next();
  });
};

module.exports = { generateAccessToken, authenticateToken };
