import { NextFunction, Request, Response } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegx = /^\S+@\S+\.\S+$/;
  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
  if (!emailRegx.test(email)) return res.status(400).json({ message: 'email invalido' });
  if (password.length <= 6) return res.status(400).json({ message: 'password invalido' });
  next();
};

export default validateLogin;
