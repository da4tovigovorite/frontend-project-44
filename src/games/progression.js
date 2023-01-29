import _ from 'lodash';
import runGameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (first, difference, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr[i] = first + i * difference;
  }
  return arr;
};

const getData = () => {
  const randomProgLength = _.random(5, 10);
  const randomHiddenElement = _.random(2, randomProgLength - 1);
  const randomProgDifference = _.random(2, 9);
  const randomProgFirstElement = _.random(1, 9);

  const arrProg = getProgression(randomProgFirstElement, randomProgDifference, randomProgLength);
  const correctAnswerOutput = arrProg[randomHiddenElement].toString(); // output, String
  arrProg[randomHiddenElement] = '..';

  const gameQuestion = arrProg.join(' '); // output

  return [gameQuestion, correctAnswerOutput];
};

const startGameProgression = () => {
  runGameLogic(rules, getData);
};
export default startGameProgression;
