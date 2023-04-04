import { ILBoard } from '../interfaces/ILBoard';
import Matches from '../database/models';
import home from '../helper/leaderBoard';

class LeaderboardService {
  protected model = Matches;

  public async getHomeTeams(): Promise<ILBoard[]> {
    const [result] = await this.model.query(home);
    return result as ILBoard[];
  }
}

export default LeaderboardService;
