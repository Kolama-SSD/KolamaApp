import Event from '../models/event.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createEvent = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers can create a Adds!'));

  const newEvent = new Event({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    next(err);
  }
};