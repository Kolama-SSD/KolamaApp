import User from '../models/user.model.js';
import createError from '../utils/createError.js';
import jwt from 'jsonwebtoken';

// User registration
export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      ...req.body,
    });

    await newUser.save();
    res.status(201).send('User has been created Successfully....');
  } catch (err) {
    next(err);
  }
};

// Login for users
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, 'User not found!'));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.status(200).json({ token, info });
  } catch (err) {
    next(err);
  }
};
