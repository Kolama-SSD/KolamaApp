import express from 'express';
import {
  createProvince,
//   deleteAdd,
//   getAdd,
//   getAdds,
//   updateAdds,
} from '../controllers/province.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new add route
router.post('/', verifyToken, createProvince);

// //creat delete add route
// router.delete('/:id', verifyToken, deleteAdd);

// //create retrive add route
// router.get('/single/:id', getAdd);

// //createget all ads route
// router.get('/', getAdds);

// //createget all ads route
// router.put('/:id',verifyToken , updateAdds);

export default router; 
 