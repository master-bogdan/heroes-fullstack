import { Request, Response, NextFunction } from 'express';
import { UserRequest } from '../../interfaces/user-request.interface';
import { IHero } from '../../db/models/heroes.model';
import { IPaginationQuery } from '../../interfaces/pagination-query.interface';
import { HeroesService } from './heroes.service';

interface IHeroesController {
  readonly heroesService: HeroesService;
  getAllHeroes: (req: Request, res: Response, next: NextFunction) => void;
  getHero: (req: Request, res: Response, next: NextFunction) => void;
  createHero: (req: UserRequest, res: Response, next: NextFunction) => void;
  updateHero: (req: Request, res: Response, next: NextFunction) => void;
  deleteHero: (req: Request, res: Response, next: NextFunction) => void;
}
export class HeroesController implements IHeroesController {
  readonly heroesService = new HeroesService();

  getAllHeroes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = (req.query as unknown) as IPaginationQuery;
      const result = await this.heroesService.getAllHeroes(query);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  getUserHeroes = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const query = (req.query as unknown) as IPaginationQuery;
      const { userId } = req.user!;
      const result = await this.heroesService.getUserHeroes(query, userId);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  getHero = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { heroId } = req.params;
      const result = await this.heroesService.getHero(heroId);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  createHero = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.user!;
      const heroData = req.body as Omit<IHero, 'ownerId'>;

      const result = await this.heroesService.createHero({
        ...heroData,
        ownerId: userId,
      });

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  updateHero = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { heroId } = req.params!;
      const heroData = req.body as Partial<IHero>;

      const result = await this.heroesService.updateHero(heroId, heroData);

      res.status(206).json(result);
    } catch (error) {
      next(error);
    }
  };

  deleteHero = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { heroId } = req.params!;
      const result = await this.heroesService.deleteHero(heroId);

      res.status(202).json(result);
    } catch (error) {
      next(error);
    }
  };
}
