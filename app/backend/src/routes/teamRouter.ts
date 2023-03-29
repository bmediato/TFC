import { NextFunction, Request, Response, Router } from 'express';
import TeamController from '../controllers/teamController';

const teamController = new TeamController();

const teamRouter = Router();

teamRouter.get('/', (req: Request, res: Response, next: NextFunction) => teamController
  .getAll(req, res, next));
teamRouter.get('/:id', (req: Request, res:Response, next:NextFunction) => teamController
  .getById(req, res, next));

export default teamRouter;
