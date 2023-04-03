import { NextFunction, Request, Response, Router } from 'express';
import { validateToken } from '../middlewares/auth';
import MatcheController from '../controllers/matchesController';

const matchController = new MatcheController();
const matchesRouter = Router();

matchesRouter.get('/', (req:Request, res:Response, next: NextFunction) => matchController
  .getByProgress(req, res, next));

matchesRouter.patch('/:id/finish', validateToken, (req:Request, res: Response) => matchController
  .finishMatches(req, res));

matchesRouter.patch('/:id', validateToken, (req:Request, res:Response) => matchController
  .updateGoals(req, res));
export default matchesRouter;
