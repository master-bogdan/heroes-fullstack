import { Router } from 'express';

const router = Router();

router
  .get('/')
  .get('/:heroId')
  .post('/')
  .patch('/:heroId')
  .delete('/:heroId');

export { router as HeroesRouter };
