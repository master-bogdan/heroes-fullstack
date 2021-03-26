import express, { Request, Response } from 'express';
import { Character } from '../models/Character';

const api = express.Router();

api.get('/api', async (req: Request, res: Response) => {
  try {
    const characters = await Character.find();
    if (characters) {
      res.status(200).json(characters);
    } else {
      res.status(404).json({ response: 'not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

api.post('/api', async (req: Request, res: Response) => {
  try {
    const { char } = req.body;
    if (char !== null && char !== undefined) {
      const character = new Character({
        title: char.title,
        image: char.image,
        description: char.description,
      });
      await character.save();
      res.status(200).json({ response: 'success' });
    } else {
      res.status(404);
      res.json({ response: 'error' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

api.put('/api', async (req: Request, res: Response) => {
  try {
    const { id, char } = req.body;
    await Character.findByIdAndUpdate(id, { ...char }, null, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({ response: error });
      }
      res.status(200).json({ response: 'success' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

api.delete('/api', async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await Character.findByIdAndDelete(id, null, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({ response: error });
      }
      res.status(200).json({ response: 'success' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

export default api;
