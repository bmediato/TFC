export interface IMatches {
  homeTeamGoals: number,
  awayTeamGoals: number
}

export interface INewMatches extends IMatches {
  homeTeamId: number;
  awayTeamId: number;
}

export interface AllMatches extends INewMatches {
  id: number;
  inProgress: boolean;
  homeTeam: { teamName: string };
  awayTeam: { teamName: string };
}
