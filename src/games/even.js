import _ from 'lodash';
import runGameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getData = () => {
  const randomNumber = _.random(1, 10);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => {
  runGameLogic(rules, getData);
};
export default startGameEven;
