// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';
import runGameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getResult = (num1, num2) => { // Euclids Algorithm
  let x = num1;
  let y = num2;
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const getData = () => {
  const randomFirstNumber = _.random(1, 10);
  const randomSecondNumber = _.random(1, 10);

  const gameQuestion = `${randomFirstNumber} ${randomSecondNumber}`;
  const gameResult = getResult(randomFirstNumber, randomSecondNumber).toString();

  return [gameQuestion, gameResult];
};

const startGameGcd = () => {
  runGameLogic(rules, getData);
};
export default startGameGcd;
