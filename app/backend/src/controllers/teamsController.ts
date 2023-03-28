import { Request, Response } from 'express';
import teamService from '../services/teamsService';

const getAll = async (req: Request, res: Response) => {
  const result = await teamService.getAll();
  res.status(200).json(result);
};

const teamController = {
  getAll,
};

export default teamController;
