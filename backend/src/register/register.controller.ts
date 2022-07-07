import { service } from './register.service';
import { Request, Response, NextFunction } from 'express';
import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { hasOnlyValidProperties } from '../utils/hasOnlyValidProperties';
import { hasRequiredProperties } from '../utils/hasRequiredProperties';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
const REQUIRED_PROPERTIES = [
  'email',
  'username',
  'password',
  'first_name',
  'last_name',
];

const ALLOWED_PROPERTIES = [...REQUIRED_PROPERTIES, 'skills'];

async function emailExist(req: Request, res: Response, next: NextFunction) {
  const { email = '' } = req.body.data;
  const emailExist = await service.readEmail(email);
  if (emailExist) {
    res.locals.userFromEmail = emailExist;
  }
  next();
}
async function usernameExist(req: Request, res: Response, next: NextFunction) {
  const { username = '' } = req.body.data;
  const usernameExist = await service.readUsername(username);
  if (usernameExist) {
    res.locals.userFromUsername = usernameExist;
  }
  next();
}

function isUserAvailable(req: Request, res: Response, next: NextFunction) {
  const { userFromEmail = '', userFromUsername = '' } = res.locals;
  if (userFromEmail || userFromUsername) {
    const message = userFromEmail
      ? 'Email is already in use.'
      : 'Username is already in use.';
    return next({ status: 400, message });
  }
  next();
}

async function encryptPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body.data;
  const { SALT } = process.env;
  let saltError;
  if (!SALT) {
    return next({
      status: 500,
      message: 'Error creating user. Please try again.',
    });
  }
  const hashedPassword = await bcrypt
    .hash(password, parseInt(SALT))
    .catch(saltError);
  if (saltError) {
    return next({
      status: 500,
      message: 'Error encrypting password. Please try again.',
    });
  }
  const { data } = req.body;
  const { email } = data;
  res.locals.user = {
    ...data,
    email: email.toLowerCase(),
    password: hashedPassword,
  };
  next();
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  const { user } = res.locals;
  const createdUser = await service.create(user);
  if (createdUser) {
    res.locals.user = createdUser;
    return next();
  }
  next({ stauts: 500, message: 'Unable to crete user. Please try again' });
}

async function generateAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user } = res.locals;
  const { email, user_id } = user;
  const { TOKEN_KEY } = process.env;
  if (TOKEN_KEY) {
    const token = sign({ user_id, email }, TOKEN_KEY, {
      expiresIn: '1d',
    });
    res.status(201).json({ data: token });
  }
  return next({
    status: 500,
    message: 'Token key is missing. Please try again',
  });
}

export const controller = {
  register: [
    hasOnlyValidProperties(ALLOWED_PROPERTIES),
    hasRequiredProperties(REQUIRED_PROPERTIES),
    asyncErrorBoundary(emailExist),
    asyncErrorBoundary(usernameExist),
    isUserAvailable,
    asyncErrorBoundary(encryptPassword),
    asyncErrorBoundary(createUser),
    asyncErrorBoundary(generateAccessToken),
  ],
};
