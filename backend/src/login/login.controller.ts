import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { Request, Response, NextFunction } from 'express';
import { service } from './login.service';
import bcrypt from 'bcryptjs';
async function userExist(req: Request, res: Response, next: NextFunction) {
  const { email = '' }: { email: string } = req.body.data;
  const userExist = await service.read(email);
  if (userExist) {
    res.locals.user = userExist;
    return next();
  }
  next({ status: 401, message: 'Email and or password is incorrect' });
}

async function validatePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password = '' }: { password: string } = req.body.data;
  const { user } = res.locals;
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (passwordIsValid) {
    return next();
  }
  return next({ status: 401, message: 'Email or password is incorrect' });
}

async function createToken(req: Request, res: Response, next: NextFunction) {}

export const login = [
  asyncErrorBoundary(userExist),
  asyncErrorBoundary(validatePassword),
  asyncErrorBoundary(createToken),
];
