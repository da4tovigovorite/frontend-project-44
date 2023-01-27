import _ from 'lodash';
import { gameLogic } from '../index.js';

const rules = 'What is the result of the expression?';

const arrQuestionAndCorrectAnswer = () => {
  const randomFirstNumber = _.random(11, 20);
  const randomSecondNumber = _.random(1, 10);

  const mathematicalOperations = [42, 43, 45]; // Ascii: 42 is "*" ; 43 is "+" ; 45  is "-"
  // random between [42,43,45]
  const randomMathOp = mathematicalOperations[
    Math.floor(Math.random() * mathematicalOperations.length)];
  const arithmeticOperation = String.fromCharCode(randomMathOp); // convert Ascii symbol to a char

  let gameResult = 0;
  // which of the operations ( + , - , * ) will be performed
  if (arithmeticOperation === '+') {
    const isPlus = randomFirstNumber + randomSecondNumber;
    gameResult = isPlus.toString();
  } else if (arithmeticOperation === '-') {
    const isMinus = randomFirstNumber - randomSecondNumber;
    gameResult = isMinus.toString();
  } else {
    const isMulti = randomFirstNumber * randomSecondNumber;
    gameResult = isMulti.toString();
  }

  const gameQuestion = `${randomFirstNumber} ${arithmeticOperation} ${randomSecondNumber}`;

  return [gameQuestion, gameResult];
};

const gameCalc = () => {
  const arrOutput = [];
  for (let i = 0; i < 3; i += 1) {
    arrOutput.push(arrQuestionAndCorrectAnswer());
  }
  gameLogic(rules, arrOutput);
};
export default gameCalc;
