const pet = {
  full: 100,
  fun: 50,
  strength: 100,
  energy: 50,
};

const getStat = (stat) => pet[stat];

const setStat = (stat, newValue) => {
  pet[stat] = newValue;
};

const addStat = (stat, addValue) => {
  pet[stat] += addValue;
};

const subStat = (stat, subValue) => {
  pet[stat] -= subValue;
};

const scorePrinter = (quadDiv, scoreToPrint) => {
  $(`#${quadDiv}`).html(`<h3>${scoreToPrint}</h3>`);
};

export default {
  pet, getStat, setStat, addStat, subStat, scorePrinter,
};
