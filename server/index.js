

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import addRoute from './routes/add.route.js';
import addKolamRoute from './routes/addKolam.route.js';
import addMaskRoute from './routes/addMask.route.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';

import serverless from 'serverless-http';

const app = express();
dotenv.config();
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB Connected successfully`);
  })
  .catch((err) => console.log(`DB connection error`, err));

// Define CORS configuration with allowed origins.
const corsOptions = {
  // Specify the origins that are allowed to access your API.
  origin: ['https://kolamasrilanka.netlify.app/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use('/api/auth', cors(corsOptions), authRoute);
app.use('/api/users', cors(corsOptions), userRoute);

// Define custom CORS settings for the '/api/adds' route.
app.use('/api/adds', cors({ origin: 'https://kolamasrilanka.netlify.app/' }), addRoute);

// Define custom CORS settings for the '/api/addskolam' route.
app.use('/api/addskolam', cors({ origin: 'https://kolamasrilanka.netlify.app/' }), addKolamRoute);

// Define custom CORS settings for the '/api/addsmask' route.
app.use('/api/addsmask', cors({ origin: 'https://kolamasrilanka.netlify.app/' }), addMaskRoute);

export const handler = serverless(app);
