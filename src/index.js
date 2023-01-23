import readlineSync from 'readline-sync';

export const gameLogic = (conditions, arrInput) => {
  const userName = readlineSync.question(`Welcome to the Brain Games!\nMay I have your name? `);
  console.log(`Hello, ${userName}!`);

  console.log(conditions);

  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameCorrectAnswer] = arrInput[i];
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question(`Your answer: `);

    if (userAnswer == gameCorrectAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameCorrectAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gameLogic;
