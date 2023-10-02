import Province from '../models/province.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createProvince = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers can create a Adds!'));

  const newProvince = new Province({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedProvince = await newProvince.save();
    res.status(201).json(savedProvince);
  } catch (err) {
    next(err);
  }
};
