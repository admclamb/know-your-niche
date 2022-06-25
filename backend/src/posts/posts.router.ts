const router = require('express').Router();
import { controller } from './posts.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/').get(controller.list).all(methodNotAllowed);

export const postRouter = router;
