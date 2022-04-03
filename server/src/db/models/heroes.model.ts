import { model, Document } from 'mongoose';
import { HeroesSchema } from 'db/schemas/heroes.schema';

export interface IHero {
  title: string
  description: string
  image: string
}

export const HeroesModel = model<IHero & Document>('Heroes', HeroesSchema);
