const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "c7d6cf0ec2d268fd892e4d1a94322c16c4626f6f512eda28e811b3cc9e58a033d09bc331ddb6f3748a61c13881f1b042");
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

    if (!user) {
      throw new Error("invalid credentials");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({
      errorType: "authentication error",
      message: err,
    });
  }
};

module.exports = auth;
