import readlineSync from 'readline-sync';

const runGameLogic = (conditions, arrInput) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(conditions);

  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameCorrectAnswer] = arrInput();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameCorrectAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default runGameLogic;
