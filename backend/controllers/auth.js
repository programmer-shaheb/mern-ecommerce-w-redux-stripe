import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(404).json({ message: "Email Already Exist" });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password Don't Match" });

    const newUser = new User({
      username: name,
      email: email,
      password: CryptoJS.AES.encrypt(password, process.env.PASS_KEY).toString(),
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );

    res.status(200).json({ savedUser, token });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something Went Wrong" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User Doesn't Exist" });

    const hashedPassword = CryptoJS.AES.decrypt(
      oldUser.password,
      process.env.PASS_KEY
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (oldUser.password !== originalPassword)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      {
        id: oldUser._id,
        isAdmin: oldUser.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );
    res.status(200).json({ oldUser, token });
  } catch (error) {
    res.status(404).json({ message: "Something Went Wrong" });
  }
};
