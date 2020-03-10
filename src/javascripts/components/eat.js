import utils from '../helpers/utils';
import data from '../helpers/data';

const feedHealthyFood = () => {
  let fullScore = data.getStat('full');
  if (fullScore <= 90) { data.addStat('full', 10); } else { data.setStat('full', 100); }
  fullScore = data.getStat('full');
  data.scorePrinter('eat-score-container', fullScore);
};

const feedJunkFood = () => {
  let fullScore = data.getStat('full');
  if (fullScore >= 3) { data.subStat('full', 3); } else { data.setStat('full', 0); }
  fullScore = data.getStat('full');
  data.scorePrinter('eat-score-container', fullScore);
};

const eatQuadPrinter = () => {
  let domString = '';
  domString += '<h2>EAT</h2>';
  domString += '<div id="eat-score-container"></div>';
  domString += '<button id="healthy-food-btn">Healthy Food</button>';
  domString += '<button id="junk-food-btn">Junk Food</button>';

  utils.printToDom('eat', domString);
  data.scorePrinter('eat-score-container', data.pet.full);
  $('#healthy-food-btn').click(feedHealthyFood);
  $('#junk-food-btn').click(feedJunkFood);
};

export default { eatQuadPrinter };
