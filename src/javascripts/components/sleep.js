import utils from '../helpers/utils';
import data from '../helpers/data';

const catNap = () => {
  let energyScore = data.getStat('energy');
  if (energyScore <= 50) { data.addStat('energy', 50); } else { data.setStat('energy', 100); }
  energyScore = data.getStat('energy');
  data.scorePrinter('sleep-score-container', energyScore);
};

const deepSlumber = () => {
  let energyScore = data.getStat('energy');
  if (energyScore <= 40) { data.addStat('energy', 60); } else { data.setStat('energy', 100); }
  energyScore = data.getStat('energy');
  data.scorePrinter('sleep-score-container', energyScore);
};

const sleepQuadPrinter = () => {
  let domString = '';
  domString += '<h2>SLEEP</h2>';
  domString += '<div id="sleep-score-container"></div>';
  domString += '<button id="cat-nap-btn">Cat Nap</button>';
  domString += '<button id="deep-slumber-btn">Deep Slumber</button>';

  utils.printToDom('sleep', domString);
  data.scorePrinter('sleep-score-container', data.pet.energy);
  $('#cat-nap-btn').click(catNap);
  $('#deep-slumber-btn').click(deepSlumber);
};

export default { sleepQuadPrinter };
