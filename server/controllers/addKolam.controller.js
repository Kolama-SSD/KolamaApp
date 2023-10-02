import AddKolam from '../models/addKolam.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createAddKolam = async (req, res, next) => {
    if (!req.isSeller)
        return next(createError(403, 'Only sellers can create a Adds!'));

    const newAddKolam = new AddKolam({
        userId: req.userId,
        ...req.body,
    });
    try {
        const savedAddKolam = await newAddKolam.save();
        res.status(201).json(savedAddKolam);
    } catch (err) {
        next(err);
    }
};

//create delete function for sellers' adds
export const deleteAddKolam = async (req, res, next) => {
    try {
        const newAddKolam = await AddKolam.findById(req.params.id);

        if (newAddKolam.userId !== req.userId)
            return next(createError(403, 'You can Delete your Adds only!'));
        await AddKolam.findByIdAndDelete(req.params.id);
        res.status(200).send('Add has been deleted!');
    } catch (err) {
        next(err);
    }
};

//get seleted add from Add model
export const getAddKolam = async (req, res, next) => {
    try {
        const newAddKolam = await AddKolam.findById(req.params.id);
        if (!newAddKolam) return next(createError(404, 'Add Not Found!'));
        res.status(200).send(newAddKolam);
    } catch (err) {
        next(err);
    }
};


//get ads acoording to filtering
export const getAddsKolam = async (req, res, next) => {
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
        const newAddKolam = await AddKolam.find(filters).sort({ [q.sort]: -1 });
        res.status(200).send(newAddKolam);
    } catch (err) {
        next(err);
    }
};


//create update selected product
export const updateAddsKolam = async (req, res) => {
    try {
        const productId = req.params.id;

        // Find product by ID and update product details
        const updatedProduct = await AddKolam.findByIdAndUpdate(
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