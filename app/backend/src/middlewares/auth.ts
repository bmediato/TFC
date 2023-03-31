import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUserWithouPassword } from '../interfaces/IUser';

const secret: string = process.env.JWT_SECRET || 'segredinho';

export const createToken = (data: IUserWithouPassword) => jwt.sign(data, secret, {
  algorithm: 'HS256',
  expiresIn: '5h',
});

export const verifyToken = (token: string) => jwt.verify(token, secret);

export const validateToken = (req:Request, res:Response, next:NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const token = verifyToken(authorization);
    req.body.user = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
