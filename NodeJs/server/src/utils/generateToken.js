const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign(
    { userId }, // Saves payload as { userId: "..." }
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = generateToken;