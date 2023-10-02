import Add from '../models/add.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createAdd = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers can create a Adds!'));

  const newAdd = new Add({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedAdd = await newAdd.save();
    res.status(201).json(savedAdd);
  } catch (err) {
    next(err);
  }
};

//create delete function for sellers' adds
export const deleteAdd = async (req, res, next) => {
  try {
    const add = await Add.findById(req.params.id);
    console.log('1');
    if (add.userId !== req.userId) {
      console.log('2');

      return next(createError(403, 'You can Delete your Adds only!'));
    }
    console.log('3');

    await Add.findByIdAndDelete(req.params.id);
    console.log('4');

    res.status(200).send('Add has been deleted!');
  } catch (err) {
    console.log('4');

    next(err);
  }
};

//get seleted add from Add model
export const getAdd = async (req, res, next) => {
  try {
    const add = await Add.findById(req.params.id);
    if (!add) return next(createError(404, 'Add Not Found!'));
    res.status(200).send(add);
  } catch (err) {
    next(err);
  }
};

//get ads acoording to filtering
export const getAdds = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: 'i' } }),
  };
  try {
    const add = await Add.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(add);
  } catch (err) {
    next(err);
  }
};

//create update selected product
export const updateAdds = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find product by ID and update product details
    const updatedProduct = await Add.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'product is not found' });
    }

    return res.json({
      message: 'Product details updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
