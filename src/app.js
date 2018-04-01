$(document).ready(function () {
  const load = $('.load');
  const play = $('.play');
  const landing = $('.landing');
  const question = $('.question');
  let choices = $('.choices');
  let button;
  let buttons = [];
  let points = 0;
  let correct = $('.correct');
  let wrong = $('.wrong');
  let currentQuestion = 0;

  // const questions = {
  //   question1: 'British actor Boris Karloff created a cinematic icon when he played the role of what monster?',
  //   question2: 'In a horror movie, you should worry if you encounter a doll named what'
  // };

  // let answers = {
  //   question1: ['Dracula', 'Werewolf', 'Alien', 'Frankenstein'],
  //   question2: ['A. Smiley', 'B. Bonnie', 'C. Chucky','D. Dolly']
  // };

  // const correctAnswers = {
  //   question1: 'Frankenstein',
  //   question2: 'Chucky'
  // };

  const game = [{
    question: 'British actor Boris Karloff created a cinematic icon when he played the role of what monster?',
    answers: ['Dracula', 'Werewolf', 'Frankenstein', 'Alien'],
    answer: 2
  },
  {
    question: 'In a horror movie, you should worry if you encounter a doll named what?',
    answers: ['Chucky', 'Bonnie', 'Pennywise','Bilbo'],
    answer: 2
  },
  {
    question: 'In what horror flick did the survivors hide out in a mall?',
    answers: ['Wrong Turn', 'Dawn of the Dead', 'The Ring', 'Texas Chainsaw Massacre'],
    answer: 1
  },
  {
    question: 'Which one of these films was the last horror movie to win Best Picture at the Academy Awards?',
    answers: ['Jaws', 'The Exorcist', 'Silence of the Lambs', 'The Sixth Sense'],
    answer: 2
  },
  {
    question: 'What is the name of the motel in Psycho?',
    answers: ['Bel Air Motel', 'Bates Motel', 'The Commons', 'Crave Inn'],
    answer:  1
  },
  {
    question: 'Which horror film was the first to be nominated for a best picture Oscar?',
    answers: ['Rosemarys Baby', 'Poltergeist', 'The Exorcist', 'Carrie' ],
    answer: 2
  }];



  wrong.hide();
  correct.hide();
  play.hide();

  load.click(loadGame);

  function loadGame(event) {
    play.show();
    landing.hide();
    printQuestion();
  }

  function printQuestion() {
  const displayQuestion = game[currentQuestion].question;
  question.text(displayQuestion);
  console.log(currentQuestion);
}
printQuestion();


function createButtons () {
  buttons = [];
  for (let i = 0; i < game[currentQuestion].answers.length; i++) {
    button = $('<button></button>').text(game[currentQuestion].answers[i]).addClass('button');
    button.click(rightOrWrong);
    buttons.push(button);
    choices.append(button);
  }
  console.log(buttons);
}
createButtons();

  function rightOrWrong() {
  play.hide()
  if ($(this).text() === game[currentQuestion].answers[game[currentQuestion].answer])  {
    points += 1;
    console.log(points);
    correct.show();
  } else {
    wrong.show();
  }
}
  setTimeout(function () {
   correct.hide();
   wrong.hide();
 }, 5000);
   // console.log(game.length-1);
   console.log('hello');


  if (currentQuestion !== game.length - 1) {
   currentQuestion++;
   console.log(currentQuestion);
 } else {
  console.log("end game");
  printQuestion();
  createButtons();
}

console.log(currentQuestion);

});


