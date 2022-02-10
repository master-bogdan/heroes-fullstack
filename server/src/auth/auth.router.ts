import { Router } from 'express';
import { AuthController } from './auth.controller';

const auth = Router();

auth.post('/login', AuthController.login);

auth.post('/register', AuthController.register);

export default auth;
