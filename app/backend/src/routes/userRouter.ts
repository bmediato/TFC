import { Request, Response, Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import UserController from '../controllers/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);

export default userRouter;
