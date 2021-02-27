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

const CharacterSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

export const Character = model<ICharacter>('Character', CharacterSchema);
