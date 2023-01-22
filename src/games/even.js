import _ from 'lodash';
import { gameLogic } from '../index.js';

const rules = `Answer "yes" if the number is even, otherwise answer "no".`;

const isEven = (num) => (num % 2 === 0 ? `yes` : `no`); // isEven is a string

const arrQuestionAndCorrectAnswer = () => {
  const randomNumber = _.random(1, 10);
  return [randomNumber, isEven(randomNumber)];
};

const gameEven = () => {
  const arrOutput = [];
  for (let i = 0; i < 3; i += 1) {
    arrOutput.push(arrQuestionAndCorrectAnswer());
  }
  gameLogic(rules, arrOutput);
};
export default gameEven;
