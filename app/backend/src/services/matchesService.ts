import { ModelStatic } from 'sequelize';
import { IMatches, INewMatches } from '../interfaces/IMatches';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import HttpException from '../exceptions/HttpException';

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

  public async create(newMatches: INewMatches) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = newMatches;
    const home = await this.modelMatch.findOne({ where: { id: homeTeamId } });
    const away = await this.modelMatch.findOne({ where: { id: awayTeamId } });
    if (homeTeamId === awayTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }
    if (!home || !away) throw new HttpException(404, 'There is no team with such id!');

    const result = this.modelMatch.create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });
    return result;
  }
}

export default MatcheService;
