import { Router } from 'express';
import { AuthController } from './auth.controller';
import { ValidateLoginDTO } from './dto/login.dto';

const auth = Router();

auth.post('/login', ValidateLoginDTO, AuthController.login);

auth.post('/register', AuthController.register);

export default auth;
