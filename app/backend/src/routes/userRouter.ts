import { NextFunction, Request, Response, Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import UserController from '../controllers/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/login',
  validateLogin,
  (req: Request, res: Response, next: NextFunction) => userController.login(req, res, next),
);

export default userRouter;
