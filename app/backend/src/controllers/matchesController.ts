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

  public updateMatches = async (req:Request, res: Response) => {
    const { id } = req.params;
    await this.service.updateMatches(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };
}
export default MatcheController;
