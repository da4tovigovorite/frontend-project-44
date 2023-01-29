import _ from 'lodash';
import runGameLogic from '../index.js';

const rules = 'What is the result of the expression?';

const getCalculate = (num1, num2, op) => {
  let result = 0;
  switch (op) {
    case '*':
      result = num1 * num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      console.log('Error! Something gone wrong =(');
  }
  return result;
};

const getData = () => {
  const randomFirstNumber = _.random(11, 20);
  const randomSecondNumber = _.random(1, 10);

  const mathematicalOperations = ['*', '+', '-'];
  const randomArrNum = _.random(0, mathematicalOperations.length - 1);
  const arithmeticOperation = mathematicalOperations[randomArrNum];

  const gameQuestion = `${randomFirstNumber} ${arithmeticOperation} ${randomSecondNumber}`;
  const gameResult = getCalculate(randomFirstNumber, randomSecondNumber, arithmeticOperation);

  return [gameQuestion, gameResult.toString()];
};

const startGameCalc = () => {
  runGameLogic(rules, getData);
};
export default startGameCalc;
