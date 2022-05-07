import supertest from 'supertest';
import crypto from 'crypto';
import { app } from '../../src/app';

export const request = supertest(app);

export const randomString = (num = 4): string => crypto.randomBytes(num).toString('hex');
