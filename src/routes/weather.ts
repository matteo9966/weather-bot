import {Router} from 'express';
import { getCurrentWeatherController } from '../controllers/weather/weather.controller';
const router =  Router();

router.get('/current', getCurrentWeatherController);

export {router};