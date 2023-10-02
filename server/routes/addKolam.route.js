import express from 'express';
import {
    createAddKolam,
    deleteAddKolam,
    getAddKolam,
    getAddsKolam,
    updateAddsKolam,
} from '../controllers/addKolam.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new add route
router.post('/', verifyToken, createAddKolam);

//creat delete add route
router.delete('/:id', verifyToken, deleteAddKolam);

//create retrive add route
router.get('/single/:id', getAddKolam);

//createget all ads route
router.get('/', getAddsKolam);

// //createget all ads route
router.put('/:id', verifyToken, updateAddsKolam);

export default router;