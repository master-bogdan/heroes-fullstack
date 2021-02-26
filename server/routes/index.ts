import express from 'express';
import { Character } from '../models/Character';

const router = express.Router();

router.get('/api', async (req: express.Request, res: express.Response) => {
  try {
    const characters = await Character.find();
    if (characters) {
      res.status(200);
      res.json(characters);
    } else {
      res.status(404);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/api', async (req: express.Request, res: express.Response) => {
  try {
    const { char } = req.body;
    if (char !== null && char !== undefined) {
      const character = new Character({
        title: char.title,
        image: char.image,
        description: char.description,
      });
      await character.save();
      res.status(200);
      res.json({ message: 'success' });
    } else {
      res.status(404);
      res.json({ message: 'error' });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
