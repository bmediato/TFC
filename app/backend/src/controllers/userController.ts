import { NextFunction, Request, Response } from 'express';
import Auth from '../middlewares/auth';
import UserService from '../services/userService';

class UserController {
  private service = new UserService();
  private tokenCreate = new Auth();

  public async login(req: Request, res:Response, next:NextFunction) {
    try {
      const result = await this.service.login(req.body);
      const token = await this.tokenCreate.createToken(result);

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
