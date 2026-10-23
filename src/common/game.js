import { shuffle } from './helpers';
import { muslimArmy, qurayshArmy } from '../mock/warriors';

export const TEAM_SIZE = 4; // hər tərəfdə şəkil sayı artanda 5 et

export const SIDES = {
  muslim: { title: 'İslam ordusu', short: 'İslam ordusu' },
  quraysh: { title: 'Qureyş müşrikləri', short: 'Qureyş' },
};

// döyüşçünün EXP-sinə -30...+30 təsadüfi forma əlavə edir
const withForm = (warrior) => ({
  ...warrior,
  base_experience: warrior.base_experience + Math.floor(Math.random() * 61) - 30,
});

export const createTeams = () => ({
  team1: shuffle(muslimArmy).slice(0, TEAM_SIZE).map(withForm),
  team2: shuffle(qurayshArmy).slice(0, TEAM_SIZE).map(withForm),
});

export const getResult = (exp1, exp2) => {
  if (exp1 > exp2) return 'muslim';
  if (exp2 > exp1) return 'quraysh';
  return 'draw';
};

export const getBestWarrior = (team) =>
  [...team].sort((a, b) => b.base_experience - a.base_experience)[0];