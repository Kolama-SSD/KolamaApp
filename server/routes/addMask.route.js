import express from 'express';
import {
    createAddMask,
    deleteAddMask,
    getAddMask,
    getAddsMask,
    updateAddsMask,
} from '../controllers/addMask.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new add route
router.post('/', verifyToken, createAddMask);

//creat delete add route
router.delete('/:id', verifyToken, deleteAddMask);

//create retrive add route
router.get('/single/:id', getAddMask);

//createget all ads route
router.get('/', getAddsMask);

// //createget all ads route
router.put('/:id', verifyToken, updateAddsMask);

export default router;