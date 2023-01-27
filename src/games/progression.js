import _ from 'lodash';
import { gameLogic } from '../index.js';

const rules = 'What number is missing in the progression?';

const arrQuestionAndCorrectAnswer = () => {
  const randomProgressionLength = _.random(5, 10);
  const randomHiddenElement = _.random(2, randomProgressionLength - 1);
  const randomProgressionDifference = _.random(2, 9);
  const randomProgressionFirstElement = _.random(1, 9);

  const arr = [];
  for (let i = 0; i < randomProgressionLength; i += 1) {
    arr[i] = randomProgressionFirstElement + i * randomProgressionDifference;
  }
  const correctAnswerOutput = arr[randomHiddenElement].toString(); // output, String
  arr[randomHiddenElement] = '..';

  const gameQuestion = arr.join(' '); // output

  return [gameQuestion, correctAnswerOutput];
};

const gameProgression = () => {
  const arrOutput = [];
  for (let i = 0; i < 3; i += 1) {
    arrOutput.push(arrQuestionAndCorrectAnswer());
  }
  gameLogic(rules, arrOutput);
};
export default gameProgression;
