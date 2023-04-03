import { NextFunction, Request, Response } from 'express';
import MatcheService from '../services/matchesService';

class MatcheController {
  constructor(private service = new MatcheService()) {}

  public getAll = async (_req: Request, res:Response, next: NextFunction) => {
    try {
      const result = await this.service.getAllMatches();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getByProgress = async (req: Request, res:Response, next: NextFunction) => {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
      const result = await this.service.getByProgress(true);
      return res.status(200).json(result);
    }
    if (inProgress === 'false') {
      const result = await this.service.getByProgress(false);
      return res.status(200).json(result);
    }
    if (inProgress === undefined || inProgress === '') {
      return this.getAll(req, res, next);
    }
  };

  public finishMatches = async (req:Request, res: Response) => {
    const { id } = req.params;
    await this.service.finishMatches(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };

  public updateGoals = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.service.updateGoals(Number(id), { homeTeamGoals, awayTeamGoals });
    return res.status(200).json({ message: 'Atualizado' });
  };
}

export default MatcheController;
