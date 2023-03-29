import { Request, Response } from 'express';
import TeamService from '../services/teamsService';

class TeamController {
  private service = new TeamService();

  public async getAll(req: Request, res:Response) {
    const team = await this.service.getAll();
    return res.status(200).json(team);
  }
}

export default TeamController;
