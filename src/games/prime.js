import _ from 'lodash';
import runGameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  const s = Math.sqrt(num);

  for (let i = 2; i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const randomNumber = _.random(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGamePrime = () => {
  runGameLogic(rules, getData);
};
export default startGamePrime;
