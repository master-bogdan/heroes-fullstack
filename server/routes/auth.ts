import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';

const auth = Router();

auth.post('/login', login);

auth.post('/register', register);

export default auth;
