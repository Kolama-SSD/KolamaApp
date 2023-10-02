import express from 'express';
import {
  createEvent,
//   deleteAdd,
//   getAdd,
//   getAdds,
//   updateAdds,
} from '../controllers/event.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

//create new add route
router.post('/', verifyToken, createEvent);

// //creat delete add route
// router.delete('/:id', verifyToken, deleteAdd);

// //create retrive add route
// router.get('/single/:id', getAdd);

// //createget all ads route
// router.get('/', getAdds);

// //createget all ads route
// router.put('/:id',verifyToken , updateAdds);

export default router;
