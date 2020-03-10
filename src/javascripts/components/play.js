import utils from '../helpers/utils';
import data from '../helpers/data';

const superFunActivity = () => {
  let funScore = data.getStat('fun');
  if (funScore <= 50) { data.addStat('fun', 50); } else { data.setStat('fun', 100); }
  funScore = data.getStat('fun');
  data.scorePrinter('play-score-container', funScore);
};

const sortaFunActivity = () => {
  let funScore = data.getStat('fun');
  if (funScore <= 98) { data.addStat('fun', 2); } else { data.setStat('fun', 100); }
  funScore = data.getStat('fun');
  data.scorePrinter('play-score-container', funScore);
};

const playQuadPrinter = () => {
  let domString = '';
  domString += '<h2>PLAY</h2>';
  domString += '<div id="play-score-container"></div>';
  domString += '<button id="super-fun-btn">Super Fun</button>';
  domString += '<button id="sorta-fun-btn">Sorta Fun</button>';

  utils.printToDom('play', domString);
  data.scorePrinter('play-score-container', data.pet.fun);
  $('#super-fun-btn').click(superFunActivity);
  $('#sorta-fun-btn').click(sortaFunActivity);
};

export default { playQuadPrinter };
