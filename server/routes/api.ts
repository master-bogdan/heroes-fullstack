import { Router } from 'express';
import {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '../controllers/api.controller';
import checkAuth from '../middleware/checkAuth';

const api = Router();

api.get('/', checkAuth, getCharacters);

api.post('/', checkAuth, createCharacter);

api.patch('/:id', checkAuth, updateCharacter);

api.delete('/:id', checkAuth, deleteCharacter);

export default api;
