import express from 'express';
import { errorHandler } from './errors/errorHandler';
import { notFound } from './errors/notFound';
import { registerRouter } from './register/register.router';
import { loginRouter } from './login/login.router';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const cors = require('cors');
export const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use(notFound);
app.use(errorHandler);
