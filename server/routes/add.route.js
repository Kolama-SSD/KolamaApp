import express from 'express';
import {
  createAdd,
  deleteAdd,
  getAdd,
  getAdds,
  updateAdds,
} from '../controllers/add.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new add route
router.post('/', verifyToken, createAdd);

//creat delete add route
router.delete('/:id', verifyToken, deleteAdd);

//create retrive add route
router.get('/single/:id', getAdd);

//createget all ads route
router.get('/', getAdds);

//createget update ads route
router.put('/:id',verifyToken , updateAdds);

export default router;
