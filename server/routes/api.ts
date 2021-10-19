import { Router } from 'express';

import { UserModel } from '../models/user.model';
import {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '../controllers/api.controller';

const api = Router();

api.get('/', UserModel.checkAuth, getCharacters);

api.post('/', UserModel.checkAuth, createCharacter);

api.patch('/:id', UserModel.checkAuth, updateCharacter);

api.delete('/:id', UserModel.checkAuth, deleteCharacter);

export default api;
