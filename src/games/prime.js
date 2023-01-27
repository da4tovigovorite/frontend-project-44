import _ from 'lodash';
import { gameLogic } from '../index.js';

const rules = `Answer "yes" if the number is even, otherwise answer "no".`;

const isPrime = (num) => {
  if (num <= 1) return `no`;
  if (num % 2 === 0 && num > 2) return `no`;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return `no`;
  }
  return `yes`;
};

const arrQuestionAndCorrectAnswer = () => {
  const randomNumber = _.random(1, 100);
  return [randomNumber, isPrime(randomNumber)];
};

const gamePrime = () => {
  const arrOutput = [];
  for (let i = 0; i < 3; i += 1) {
    arrOutput.push(arrQuestionAndCorrectAnswer());
  }
  gameLogic(rules, arrOutput);
};
export default gamePrime;
