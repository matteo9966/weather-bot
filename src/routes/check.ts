import {Router} from 'express';
import { checkController } from '../controllers/check.controller';
const router = Router();

router.get('/',checkController);

export {router};