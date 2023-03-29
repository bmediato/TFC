import { Request, Response } from 'express';
import TeamService from '../services/teamsService';

class TeamController {
  private service = new TeamService();

  public async getAll(_req: Request, res:Response) {
    const team = await this.service.getAll();
    return res.status(200).json(team);
  }

  public async getById(req: Request, res:Response) {
    const { id } = req.params;
    const oneTeam = await this.service.getById(Number(id));
    return res.status(200).json(oneTeam);
  }
}

export default TeamController;
