import { NextFunction, Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private service = new UserService()) { }

  public async login(req: Request, res:Response, next: NextFunction) {
    try {
      const token = await this.service.login(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public getByRole = (req: Request, res: Response) => {
    const { user } = req.body;
    const { role } = user;

    if (!user) return res.status(401).json({ message: 'Token must be a valid token' });
    return res.status(200).json({ role });
  };
}

export default UserController;
