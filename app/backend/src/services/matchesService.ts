import { ModelStatic } from 'sequelize';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

class MatcheService {
  private modelMatch: ModelStatic<Matches> = Matches;

  public async getAllMatches() {
    const result = await this.modelMatch.findAll(
      { include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ] },
    );
    return result;
  }

  public async getByProgress(inProgress: boolean) {
    const result = await this.modelMatch.findAll({
      where: { inProgress },
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return result;
  }
}

export default MatcheService;
