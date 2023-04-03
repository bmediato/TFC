export interface IMatches {
  homeTeamGoals: number,
  awayTeamGoals: number
}

export interface INewMatches extends IMatches {
  homeTeamId: number;
  awayTeamId: number;
}
