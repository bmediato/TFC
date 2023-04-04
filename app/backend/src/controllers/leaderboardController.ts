import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  constructor(private servie = new LeaderboardService()) {}

  public getHomeTeams = async (req: Request, res: Response) => {
    const result = await this.servie.getHomeTeams();
    return res.status(200).json(result);
  };
}

export default LeaderboardController;
