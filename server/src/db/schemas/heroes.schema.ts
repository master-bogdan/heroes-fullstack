import { Schema } from 'mongoose';
import { IHero } from '../models/heroes.model';

export const HeroesSchema: Schema<IHero> = new Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  description: {
    type: String,
    required: true,
    min: 10,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
}, {
  timestamps: true,
});
