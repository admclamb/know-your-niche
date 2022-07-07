import { Request, Response, NextFunction } from 'express';
import { sign } from 'jsonwebtoken';
export async function generateAccessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user } = res.locals;
  const { email, username, first_name, last_name, user_id } = user;
  const { TOKEN_KEY } = process.env;
  if (TOKEN_KEY) {
    const token = sign({ user_id, email }, TOKEN_KEY, {
      expiresIn: '1d',
    });
    const data = {
      user_id,
      token,
      username,
      first_name,
      last_name,
    };
    res.status(201).json({ data });
  }
  return next({
    status: 500,
    message: 'Token key is missing. Please try again',
  });
}
