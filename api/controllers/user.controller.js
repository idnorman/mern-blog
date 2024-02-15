import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
// import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You can update only your account"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password should be at least 6 characters")
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if(req.body.username === ''){
    return next(
      errorHandler(400, "Username cannot be empty")
    );
  }
  if(req.body.password === ''){
    return next(
      errorHandler(400, "Password cannot be empty")
    );
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.lenth > 20) {
      return next(
        errorHandler(400, "Username should be between 7 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }
  // let formData = {};
  // req.body.username && (formData.username = req.body.username);
  // req.body.email && (formData.email = req.body.email);
  // req.body.password && (formData.password = req.body.password);
  // formData.profilePicture = req.body.profilePicture;

let formData = {
  ...req.body.username && { username: req.body.username },
  ...req.body.email && { email: req.body.email },
  ...req.body.password && { password: req.body.password },
  profilePicture: req.body.profilePicture
};

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: formData,
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if(req.user.id !== req.params.userId){
    return next(errorHandler(403, 'You\'re not authorized to delete this user'));
  }
  try{
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
  }catch(error){
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json("User has been signed out");
  } catch (error) {
    next(error);
  }
}