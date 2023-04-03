import { NextFunction, Request, Response, Router } from 'express';
import MatcheController from '../controllers/matchesController';

const matchController = new MatcheController();
const matchesRouter = Router();

matchesRouter.get('/', (req:Request, res:Response, next: NextFunction) => matchController
  .getByProgress(req, res, next));

export default matchesRouter;
