const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
                                                                           
const registerUser = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      email,
    });
           
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );
          
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Auto Login
    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {

    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(44) || res.status(404).json({
        success: false,
        message: "Invalid credentials", // Secure message
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id);

    // Cookie configuration
    res.cookie("token", token, {
      httpOnly: true, // true in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
const logoutUser = async (req, res) => {
  try {

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {

    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};


const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Profile Error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};





module.exports = { registerUser, loginUser, getProfile,logoutUser };