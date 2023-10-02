import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import addRoute from './routes/add.route.js';
import addKolamRoute from './routes/addKolam.route.js';
import addMaskRoute from './routes/addMask.route.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';

import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb+srv://Kolama:Kolama@kolama.e0d7ieh.mongodb.net/Kolama', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB Connected successfully`);
  })
  .catch((err) => console.log(`DB connection error`, err));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/adds', addRoute);
app.use('/api/addskolam', addKolamRoute);
app.use('/api/addsmask', addMaskRoute);

export const handler = serverless(app);
