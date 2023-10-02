import AddMask from '../models/addMask.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createAddMask = async (req, res, next) => {
    if (!req.isSeller)
        return next(createError(403, 'Only admin can create a Details!'));

    const newAddMask = new AddMask({
        userId: req.userId,
        ...req.body,
    });
    try {
        const savedAddMask = await newAddMask.save();
        res.status(201).json(savedAddMask);
    } catch (err) {
        next(err);
    }
};

//create delete function for sellers' adds
export const deleteAddMask = async (req, res, next) => {
    try {
        const newAddMask = await AddMask.findById(req.params.id);

        if (newAddMask.userId !== req.userId)
            return next(createError(403, 'You can Delete your Details only!'));
        await AddMask.findByIdAndDelete(req.params.id);
        res.status(200).send('Masks details has been deleted!');
    } catch (err) {
        next(err);
    }
};

//get seleted add from Add model
export const getAddMask = async (req, res, next) => {
    try {
        const newAddMask = await AddMask.findById(req.params.id);
        if (!newAddMask) return next(createError(404, 'Details Not Found!'));
        res.status(200).send(newAddMask);
    } catch (err) {
        next(err);
    }
};

export const getAddsMask = async (req, res, next) => {
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
        const newAddMask = await AddMask.find(filters).sort({ [q.sort]: -1 });
        res.status(200).send(newAddMask);
    } catch (err) {
        next(err);
    }
};

//create update selected product
export const updateAddsMask = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find product by ID and update product details
        const updatedProduct = await AddMask.findByIdAndUpdate(
            productId,
            {
                $set: req.body,
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'product is not found' });
        }

        return res.json({ message: 'Details updated successfully', product: updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};