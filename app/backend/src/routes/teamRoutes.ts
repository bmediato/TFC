import { Request, Response, Router } from 'express';
import TeamController from '../controllers/teamsController';

const teamController = new TeamController();

const teamRouter = Router();

teamRouter.get('/teams', (req: Request, res: Response) => teamController.getAll(req, res));

export default teamRouter;
