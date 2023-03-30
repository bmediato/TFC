import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private service = new UserService()) { }

  public async login(req: Request, res:Response) {
    const token = await this.service.login(req.body);

    return res.status(200).json({ token });
  }
}

export default UserController;
