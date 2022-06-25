import { service } from './posts.service';
import { Request, Response, NextFunction } from 'express';
import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { PostInterface } from '../ts/interfaces/postInterface';

interface Query {
  type: string;
}

function checkQueryParams(
  req: Request<{}, {}, {}, Query>,
  res: Response,
  next: NextFunction
) {
  console.log('in here!');
  const { query } = req;
  if (query.hasOwnProperty('type')) {
    res.locals.query = query.type;
  }
  next();
}

async function list(req: Request, res: Response, next: NextFunction) {
  const { query = '' } = res.locals;
  console.log(query);
  const posts: PostInterface[] = await service.list(query);
  res.status(200).json({ data: posts });
}

export const controller = {
  list: [checkQueryParams, asyncErrorBoundary(list)],
};
