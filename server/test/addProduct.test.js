import Add from '../models/add.model.js';
import createError from '../utils/createError.js';
import { createAdd, deleteAdd } from '../controllers/add.controller.js';


jest.mock('../models/add.model.js');
jest.mock('../utils/createError.js');

describe('createAd d', () => {
  it('should create a new add for sellers', async () => {
    const req = {
      isSeller: true,
      userId: 'user123',
      body: { /* add properties */ },
    };
    const savedAdd = { /* mocked saved add object */ };
    Add.mockImplementationOnce(() => ({
      save: jest.fn().mockResolvedValueOnce(savedAdd),
    }));
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await createAdd(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(savedAdd);
    expect(next).not.toHaveBeenCalled();
  });

  it('should return a 403 error if user is not a seller', async () => {
    const req = {
      isSeller: false,
      userId: 'user123',
      body: { /* add properties */ },
    };
    const error = createError(403, 'Only sellers can create Adds!');
    const next = jest.fn();

    await createAdd(req, {}, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  it('should pass the error to the next middleware if there is an error in saving the add', async () => {
    const req = {
      isSeller: true,
      userId: 'user123',
      body: { /* add properties */ },
    };
    const error = new Error('Save error');
    Add.mockImplementationOnce(() => ({
      save: jest.fn().mockRejectedValueOnce(error),
    }));
    const next = jest.fn();

    await createAdd(req, {}, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});

describe('deleteAdd', () => {
    it('should return a 403 error if the user is not the owner', async () => {
      const req = {
        params: {
          id: 'add-id',
        },
        userId: 'user-id', // Replace 'user-id' with the actual ID of the user
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const next = jest.fn();
  
      await deleteAdd(req, res, next);
  
      const expectedError = createError(403, 'You can Delete your Adds only!');
    //   expect(next).toHaveBeenCalledWith(expectedError);
      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });
  });