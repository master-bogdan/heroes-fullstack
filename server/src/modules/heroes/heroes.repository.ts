import { ObjectId } from 'mongoose';
import { HeroesModel, IHero } from '../../db/models/heroes.model';
import { UsersModel } from '../../db/models/users.model';

interface IHeroesRepository {
  readonly heroesModel: typeof HeroesModel;
  readonly usersModel: typeof UsersModel;
  findAll(offset: number, limit: number): Promise<IHero[]>;
  countAll(): Promise<number>;
  findOne(heroId: string): Promise<IHero | null>;
  create(hero: IHero): Promise<IHero | null>;
  update(heroId: string, hero: Partial<IHero>): Promise<IHero | null>;
  delete(heroId: string): Promise<{ _id: ObjectId }>;
}

export class HeroesRepository implements IHeroesRepository {
  readonly heroesModel = HeroesModel;
  readonly usersModel = UsersModel;

  async findAll(offset: number, limit: number) {
    return this.heroesModel.find(
      {},
      null,
      {
        skip: offset,
        limit,
        populate: {
          path: 'ownerId',
          select: {
            password: 0,
            heroes: 0,
          },
        },
        sort: 'createdAt',
      },
    );
  }

  async countAll() {
    return this.heroesModel.countDocuments();
  }

  async findOne(heroId: string) {
    return this.heroesModel.findOne({ _id: heroId });
  }

  async create(hero: IHero) {
    const createdHero = await this.heroesModel.create(hero);
    await this.usersModel.findByIdAndUpdate(hero.ownerId, {
      $push: {
        heroes: createdHero._id,
      },
    });

    return createdHero;
  }

  async update(heroId: string, hero: Partial<IHero>) {
    return this.heroesModel.findByIdAndUpdate(
      heroId,
      {
        ...hero,
      },
      {
        new: true,
      },
    );
  }

  async delete(heroId: string) {
    const deletedHero = await this.heroesModel.findByIdAndDelete(
      heroId,
      {
        projection: {
          _id: 1,
          ownerId: 1,
        },
      },
    );

    await this.usersModel.updateOne(
      { _id: deletedHero?.ownerId },
      {
        $pull: {
          heroes: deletedHero?._id,
        },
      },
    );

    return { _id: deletedHero?._id };
  }
}
