import { ModelStatic } from 'sequelize';
import IMatches from '../interfaces/IMatches';
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

  public async finishMatches(id: number) {
    await this.modelMatch.update({ inProgress: false }, { where: { id } });
  }

  public async updateGoals(id:number, goals: IMatches) {
    const { homeTeamGoals, awayTeamGoals } = goals;
    const result = await this.modelMatch.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return result;
  }
}

export default MatcheService;
