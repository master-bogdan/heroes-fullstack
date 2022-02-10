import {
  Document,
  Schema,
  model,
} from 'mongoose';

export interface ICharacter extends Document {
  title: string
  description: string
  image: string
}

const characterSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
});

export const CharacterSchema = model<ICharacter>('Character', characterSchema);
