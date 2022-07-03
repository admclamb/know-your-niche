import express from 'express';
import { errorHandler } from './errors/errorHandler';
import { notFound } from './errors/notFound';
import { postRouter } from './posts/posts.router';
import { registerRouter } from './register/register.router';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const cors = require('cors');
const path = require('path');
export const app = express();

app.use(cors());
app.use(express.json());
app.use('/posts', postRouter);
app.use('/register', registerRouter);
app.use(notFound);
app.use(errorHandler);
