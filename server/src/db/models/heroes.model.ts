import { model, Document } from 'mongoose';
import { HeroesSchema } from '../schemas/heroes.schema';

export interface IHero {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  ownerId?: string;
}

export const HeroesModel = model<IHero & Document>('Heroes', HeroesSchema);
