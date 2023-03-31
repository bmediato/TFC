import { NextFunction, Request, Response, Router } from 'express';
import { validateToken } from '../middlewares/auth';
import validateLogin from '../middlewares/validateLogin';
import UserController from '../controllers/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/',
  validateLogin,
  (req: Request, res: Response, next:NextFunction) => userController.login(req, res, next),
);
userRouter.get(
  '/role',
  validateToken,
  (req:Request, res:Response) => userController.getByRole(req, res),
);

export default userRouter;
