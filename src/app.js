$(document).ready(function () {
  const load = $('.load');
  const play = $('.play');
  const landing = $('.landing');
  const question = $('.question');
  const gameOver = $('.game-over');
  let choices = $('.choices');
  let button;
  let buttons = [];
  let points = 0;
  let correct = $('.correct');
  let wrong = $('.wrong');
  let currentQuestion = 0;
  const firstName = $('.firstName');
  let userName;

  const game = [{
    question: 'British actor Boris Karloff created a cinematic icon when he played the role of what monster?',
    answers: ['Dracula', 'Werewolf', 'Frankenstein', 'Alien'],
    answer: 2
  },
  {
    question: 'In a horror movie, you should worry if you encounter a doll named what?',
    answers: ['Chucky', 'Bonnie', 'Pennywise','Bilbo'],
    answer: 0
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

  $('form').submit(function(e) {
    e.preventDefault();
    userName = firstName.val();
    firstName.val("");
    $(firstName).attr('placeholder', 'Thanks for following directions!');
    console.log(firstName.val());
// return yourName;
})

gameOver.hide();
wrong.hide();
correct.hide();
play.hide();
console.log(currentQuestion);
load.click(loadGame);

function loadGame(event) {
  if(firstName.val() === "" && firstName.attr('placeholder')!="Thanks for following directions!") {
    alert("Please enter your name and click Submit before clicking Play Game.");
  } else {
    play.show();
    landing.hide();
    printQuestion();
    createButtons();
  }
}

function printQuestion() {

  console.log(currentQuestion);
  const displayQuestion = game[currentQuestion].question;
  question.text(displayQuestion);
  console.log(currentQuestion);
}

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

function rightOrWrong() {
  play.text("");
  choices.text("");
  if ($(this).text() === game[currentQuestion].answers[game[currentQuestion].answer])  {
    points += 1;
    correct.show()
  } else {
    wrong.text('');
    wrong.show();
    wrong.append(`Wrong! Correct answer was ${game[currentQuestion].answers[game[currentQuestion].answer]}.`);
  }

  setTimeout(function () {
   correct.hide();
   wrong.hide();
 }, 2000);

  if (currentQuestion !== game.length - 1) {
   currentQuestion++;
   console.log(currentQuestion);
   setTimeout(function () {
     play.show();
     play.append(question);
   //below is NOT DRY - similar to printQuestion() function - try to wrap in a function later -
   question.text('');
   question.append(game[currentQuestion].question);
   createButtons();
   play.append(choices);
 }, 2000);
 } else {
  gameOver.show();
  gameOver.append(`${userName}, you earned ${points} out of 6 points.`);
  gameOver.append('<button class="reload">Play Again?</button>')
  $('.reload').on('click', function () {
    window.location.reload();
  })
}
}

});
