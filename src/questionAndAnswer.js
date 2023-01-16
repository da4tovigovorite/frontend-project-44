import readlineSync from 'readline-sync';
import _ from 'lodash';

export const questionAndAnswer = () => {
    // 1 --> quantity of games if answers are correct
    const quantityOfGames = 3;
    
    // 2 --> greeting and player`s name assignment
    const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    console.log ('Hello, ' + userName + '!');
    console.log (`Answer "yes" if the number is even, otherwise answer "no".`);
    
    // 3 --> game loop with number of games to win. 
    // look 1: quantityOfGames
    const isEven = (num) => (num % 2 == 0 ? 'yes' : 'no'); // isEven is a string
    let i = 0;
    for (i = 0; i < quantityOfGames; i += 1) {
    const randomNumber = _.random(1, 10);
    const isCurrentNumberIsEven = isEven(randomNumber);
    const userAnswer = readlineSync.question('Question: ' + randomNumber + '\nYour answer: ');
        if (isCurrentNumberIsEven == userAnswer) {
            console.log ('Correct!');
            } else {
                console.log (`'${userAnswer}' is wrong answer ;(. Correct answer was '${isCurrentNumberIsEven}'.\nLet's try again, ${userName}!`);
                return;
            }
            
    
          
    } console.log (`Congratulations, ${userName}!`);
};

export default questionAndAnswer;
