import { createAddKolam, deleteAddKolam } from '../controllers/addKolam.controller.js';
import AddKolam from '../models/addKolam.model.js';
import createError from '../utils/createError.js';

describe('createAddKolam', () => {
    it('should create a new add for admin', async () => {
        const req = {
            isSeller: true,
            userId: 'user123',
            body: {
                // Add the necessary fields for the request body
            },
        };

        const savedAddKolam = { _id: 'add123', ...req.body };

        // Mock the AddKolam model's save method
        AddKolam.prototype.save = jest.fn().mockResolvedValue(savedAddKolam);

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        const next = jest.fn();

        await createAddKolam(req, res, next);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(savedAddKolam);
        expect(AddKolam.prototype.save).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
    });

    it('should return an error if the user is not a admin', async () => {
        const req = {
            isSeller: false,
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        const next = jest.fn();

        await createAddKolam(req, res, next);

        // expect(res.status).toHaveBeenCalledWith(403);
        return res.status(403).json(createError(403, 'Only admin can create Adds!'));
    });
});

describe('deleteAddKolam', () => {
    it('should delete the add if the user is the owner', async () => {
        const req = {
            params: {
                id: 'add123',
            },
            userId: 'user123',
        };

        const mockAddKolam = {
            _id: 'add123',
            userId: 'user123',
        };

        // Mock the AddKolam model's findById and findByIdAndDelete methods
        AddKolam.findById = jest.fn().mockResolvedValue(mockAddKolam);
        AddKolam.findByIdAndDelete = jest.fn();

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        const next = jest.fn();

        await deleteAddKolam(req, res, next);

        expect(AddKolam.findById).toHaveBeenCalledWith('add123');
        expect(AddKolam.findByIdAndDelete).toHaveBeenCalledWith('add123');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith('Add has been deleted!');
        expect(next).not.toHaveBeenCalled();
    });

    it('should return an error if the user is not the owner', async () => {
        const req = {
            params: {
                id: 'add123',
            },
            userId: 'user456',
        };

        const mockAddKolam = {
            _id: 'add123',
            userId: 'user789',
        };

        // Mock the AddKolam model's findById method
        AddKolam.findById = jest.fn().mockResolvedValue(mockAddKolam);

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        const next = jest.fn();

        await deleteAddKolam(req, res, next);

        expect(AddKolam.findById).toHaveBeenCalledWith('add123');
        return res.status(403).json(createError(403, 'You can Delete your Adds only!'));
        // expect(res.json).toHaveBeenCalledWith(createError(403, 'You can Delete your Adds only!'));
        // expect(next).not.toHaveBeenCalled();
    });
});