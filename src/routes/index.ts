import {Router} from 'express';
const router = Router();


router.get('/', (req, res) => {
res.status(200);
  res.end('Index.html');
  
});

export {router};