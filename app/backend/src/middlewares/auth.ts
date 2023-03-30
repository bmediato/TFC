import * as jwt from 'jsonwebtoken';
import { IUserWithouPassword } from '../interfaces/IUser';

const secret: string = process.env.JWT_SECRET || 'segredinho';

export const createToken = (data: IUserWithouPassword) => jwt.sign({ data }, secret, {
  algorithm: 'HS256',
  expiresIn: '5h',
});

export const verifyToken = (token: string) => jwt.verify(token, secret);
