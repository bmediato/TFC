import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
  private service = new TeamService();

  public async getAll(_req: Request, res:Response, next: NextFunction): Promise<Response | void> {
    try {
      const team = await this.service.getAll();
      return res.status(200).json(team);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res:Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;
      const oneTeam = await this.service.getById(Number(id));
      return res.status(200).json(oneTeam);
    } catch (error) {
      next(error);
    }
  }
}

export default TeamController;
