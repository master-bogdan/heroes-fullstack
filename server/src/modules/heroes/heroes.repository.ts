import { UpdateWriteOpResult } from 'mongoose';
import { HeroesModel, IHero } from '../../db/models/heroes.model';

interface IHeroesRepository {
  findAll(userId: string): Promise<IHero[] | null>
  findOne(heroId: string): Promise<IHero | null>;
  create(hero: IHero): Promise<IHero | null>;
  update(hero: Partial<IHero>): Promise<UpdateWriteOpResult>;
  delete(heroId: string): Promise<unknown>;
}

export class HeroesRepository implements IHeroesRepository {
  constructor(private readonly heroesModel: typeof HeroesModel) {}

  async findAll(userId: string): Promise<IHero[]> {
    return this.heroesModel.find();
  }

  async findOne(heroId: string): Promise<IHero | null> {
    return this.heroesModel.findOne({ _id: heroId });
  }

  async create(hero: IHero): Promise<IHero> {
    return this.heroesModel.create(hero);
  }

  async update(hero: Partial<IHero>): Promise<UpdateWriteOpResult> {
    return this.heroesModel.updateOne();
  }

  async delete(heroId: string): Promise<unknown> {
    return this.heroesModel.deleteOne({ _id: heroId });
  }
}
