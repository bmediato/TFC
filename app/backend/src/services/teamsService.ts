import { ModelStatic } from 'sequelize';
import ITeam from '../interfaces/ITeams';
import Teams from '../database/models/Teams';

class TeamService {
  private modelTeam: ModelStatic<Teams> = Teams;

  public async getAll(): Promise<ITeam[]> {
    const team = await this.modelTeam.findAll();
    return team;
  }

  // public async getById(id:number | string): Promise<ITeam | null> {
  //   const team = await this.modelTeam.findByPk(+id);
  //   return team;
  // }
}

export default TeamService;
