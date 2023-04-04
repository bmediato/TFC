import { Request, Response, Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = new LeaderboardController();
const leaderboardRouter = Router();

leaderboardRouter.get('/home', (req: Request, res:Response) => leaderboardController
  .getHomeTeams(req, res));

leaderboardRouter.get('/away', (req: Request, res: Response) => leaderboardController
  .getAwayTeams(req, res));

export default leaderboardRouter;
