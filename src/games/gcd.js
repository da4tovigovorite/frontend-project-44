// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';
import { gameLogic } from '../index.js';

const rules = `Find the greatest common divisor of given numbers.`;

const resultEuclidsAlgorithm = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const arrQuestionAndCorrectAnswer = () => {
  const randomFirstNumber = _.random(1, 10);
  const randomSecondNumber = _.random(1, 10);

  const gameQuestion = ` ${randomFirstNumber} ${randomSecondNumber}`;
  const gameResult = resultEuclidsAlgorithm(randomFirstNumber, randomSecondNumber);

  return [gameQuestion, gameResult];
};

const gameGcd = () => {
  const arrOutput = [];
  for (let i = 0; i < 3; i += 1) {
    arrOutput.push(arrQuestionAndCorrectAnswer());
  }
  gameLogic(rules, arrOutput);
};
export default gameGcd;
