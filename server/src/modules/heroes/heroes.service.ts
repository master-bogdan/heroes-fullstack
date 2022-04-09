import { ObjectId } from 'mongoose';
import { IHero } from '../../db/models/heroes.model';
import { IPaginationQuery } from '../../interfaces/pagination-query.interface';
import { HeroesRepository } from './heroes.repository';

interface IHeroesService {
  readonly heroesRepository: HeroesRepository;
  getAllHeroes({
    page,
    limit,
  }: {
    page: number;
    limit: number }): Promise<{ totalPages: number; total: number; heroes: IHero[] }>;
  getHero(heroId: string): Promise<IHero | null>;
  createHero(dto: IHero): Promise<IHero | null>;
  updateHero(heroId: string, dto: Partial<IHero>): Promise<IHero | null>;
  deleteHero(heroId: string): Promise<{ _id: ObjectId }>;
}

export class HeroesService implements IHeroesService {
  readonly heroesRepository = new HeroesRepository();

  async getAllHeroes({
    page = 0,
    limit = 5,
  }: IPaginationQuery) {
    const total = await this.heroesRepository.countAll();
    const totalPages = total % limit === 0 ? total / limit : Math.floor(total / limit) + 1;
    const currentPage = Math.ceil(limit * page);

    const heroes = await this.heroesRepository.findAll(+currentPage, +limit);

    return {
      totalPages,
      total,
      heroes,
    };
  }

  async getHero(heroId: string) {
    return this.heroesRepository.findOne(heroId);
  }

  async createHero(dto: IHero) {
    return this.heroesRepository.create(dto);
  }

  async updateHero(heroId: string, dto: Partial<IHero>) {
    return this.heroesRepository.update(heroId, dto);
  }

  async deleteHero(heroId: string) {
    return this.heroesRepository.delete(heroId);
  }
}
