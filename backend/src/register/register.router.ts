const router = require('express').Router();
import { controller } from './register.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/').all(methodNotAllowed);

export const registerRouter = router;
