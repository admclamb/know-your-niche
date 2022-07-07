const router = require('express').Router();
import { controller } from './login.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/').post(controller.login).all(methodNotAllowed);

export const loginRouter = router;
