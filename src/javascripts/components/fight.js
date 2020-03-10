import utils from '../helpers/utils';
import data from '../helpers/data';

const runAway = () => {
  let strengthScore = data.getStat('strength');
  if (strengthScore >= 3 && strengthScore <= 99) { data.addStat('strength', 1); }
  strengthScore = data.getStat('strength');
  data.scorePrinter('fight-score-container', strengthScore);
};

const beViolent = () => {
  let strengthScore = data.getStat('strength');
  if (strengthScore >= 10) { data.subStat('strength', 10); } else { data.setStat('strength', 0); }
  strengthScore = data.getStat('strength');
  data.scorePrinter('fight-score-container', strengthScore);
};

const fightQuadPrinter = () => {
  let domString = '';
  domString += '<h2>FIGHT</h2>';
  domString += '<div id="fight-score-container"></div>';
  domString += '<button id="run-away-btn">Run Away</button>';
  domString += '<button id="be-violent-btn">Be Violent</button>';

  utils.printToDom('fight', domString);
  data.scorePrinter('fight-score-container', data.pet.strength);
  $('#run-away-btn').click(runAway);
  $('#be-violent-btn').click(beViolent);
};

export default { fightQuadPrinter };
