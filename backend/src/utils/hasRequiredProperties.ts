import { Request, Response, NextFunction } from 'express';

export function hasRequiredProperties(PROPERTIES: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { data = {} } = req.body;
    try {
      PROPERTIES.forEach((property) => {
        if (!data[property]) {
          return next({
            status: 400,
            message: `A '${property}' property is required`,
          });
        }
      });
      next();
    } catch (error) {
      next(error);
    }
  };
}
