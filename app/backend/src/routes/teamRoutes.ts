import { Router } from 'express';
import teamController from '../controllers/teamsController';

const teamRouter = Router();

teamRouter.get('/', teamController.getAll);

export default teamRouter;
