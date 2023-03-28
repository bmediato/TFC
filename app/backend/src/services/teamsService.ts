import Teams from '../database/models/Teams';

const getAll = async () => {
  const result = await Teams.findAll();
  return result;
};

const teamService = {
  getAll,
};

export default teamService;
