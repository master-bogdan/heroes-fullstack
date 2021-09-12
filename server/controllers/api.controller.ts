import { Request, Response } from 'express';
import { Character } from '../models/Character';
import findUser from '../utils/findUser';

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const user = await findUser(token);

    if (user) {
      await user.populate({
        path: 'characters',
        model: Character,
      }).execPopulate();

      return res.status(200).json(user.characters);
    }

    return res.status(404).json({ response: 'not found' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
};

export const createCharacter = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const user = await findUser(token);

    const { char } = req.body;

    if (char !== null && char !== undefined) {
      const character = new Character({
        title: char.title,
        image: char.image,
        description: char.description,
      });

      await character.save(async (err, savedChar) => {
        if (err) {
          throw new Error('Database error');
        }

        user!.characters.push(savedChar.id);
        await user!.save();
      });

      return res.status(200).json({ response: 'success' });
    }

    return res.status(404).json({ response: 'error' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    const { char } = req.body;
    const user = await findUser(token);

    if (user) {
      // @ts-ignore
      const character = await user.characters.id(id);

      character.set({ ...char });
      await user.save();

      return res.status(200).json({ response: 'success' });
    }

    throw new Error('Server Error');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
};

export const deleteCharacter = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const user = await findUser(token);

    const { id } = req.params;

    if (user) {
      // @ts-ignore
      await user.characters.id(id).remove();
      await user.save();

      return res.status(200).json({ response: 'success' });
    }

    throw new Error('error');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
};
