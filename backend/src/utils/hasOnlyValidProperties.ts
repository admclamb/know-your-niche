import { Request, Response, NextFunction } from 'express';

function hasOnlyValidProperties(PROPERTIES: []) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { data = {} } = req.body;
    const invalidFields = Object.keys(data).filter(
      (field) => !PROPERTIES.includes(field)
    );
    if (invalidFields.length) {
      return next({
        status: 400,
        message: `Invalid field(s): ${invalidFields.join(', ')}`,
      });
    }
    return next();
  };
}

module.exports = hasOnlyValidProperties;
