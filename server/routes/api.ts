import express, { Request, Response } from 'express';
import checkAuth from '../middleware/checkAuth';
import findUser from '../utils/findUser';

const api = express.Router();

api.get('/api', checkAuth, async (req: Request, res: Response) => {
  try {
    const user: any = await findUser(req, res);

    if (user.characters) {
      res.status(200).json(user.characters);
    } else {
      res.status(404).json({ response: 'not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

api.post('/api', checkAuth, async (req: Request, res: Response) => {
  try {
    const { char } = req.body;
    const user: any = await findUser(req, res);

    if (char !== null && char !== undefined) {
      user.characters.push({
        title: char.title,
        image: char.image,
        description: char.description,
      });
      await user.save();
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

api.put('/api', checkAuth, async (req: Request, res: Response) => {
  try {
    const { id, char } = req.body;

    const user: any = await findUser(req, res);
    const character = await user.characters.id(id);

    character.set({ ...char });
    await user.save();

    res.status(200).json({ response: 'success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

api.delete('/api', checkAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const user: any = await findUser(req, res);
    await user.characters.id(id).remove();

    await user.save();

    res.status(200).json({ response: 'success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: error });
  }
});

export default api;
