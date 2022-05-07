import { Router } from 'express';
import { validateMiddleware } from '../../common/middlewares/validate.middleware';
import { authGuard } from '../../common/guards/auth.guard';
import { HeroesController } from './heroes.controller';
import { CreateHeroValidationRules } from './validations/create-hero.validation';
import { UpdateHeroValidationRules } from './validations/update-hero.validation';

const router = Router();
const heroesController = new HeroesController();

router
  .get('/', heroesController.getAllHeroes)
  .get('/me', authGuard, heroesController.getUserHeroes)
  .get('/:heroId', heroesController.getHero)
  .post('/', authGuard, CreateHeroValidationRules, validateMiddleware, heroesController.createHero)
  .patch('/:heroId', authGuard, UpdateHeroValidationRules, validateMiddleware, heroesController.updateHero)
  .delete('/:heroId', authGuard, heroesController.deleteHero);

export { router as HeroesRouter };
