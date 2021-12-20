import User from "../models/User.js";

export const register = async (req, res) => {
  console.log(req);
  //   const newUser = new User({
  //     title: req.body.title,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  //   try {
  //     const savedUser = await newUser.save();
  //     console.log("success", savedUser);
  //   } catch (error) {
  //     console.log("err", error);
  //   }

  try {
    const result = await User.create({
      title: req.body.title,
      email: req.body.email,
      password: req.body.password,
    });
    console.log("result", result);
  } catch (error) {
    console.log("err", error);
  }
};
