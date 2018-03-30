$(document).ready(function () {
  const load = $('.load');
  const play = $('.play');
  const landing = $('.landing');
  let buttons;

console.log(play);

  const questions = {
    question1: 'British actor Boris Karloff created a cinematic icon when he played the role of what monster?',
    question2: 'In a horror movie, you should worry if you encounter a doll named what'
  }

  let answers = {
    question1: ['Dracula', 'Werewolf', 'Alien', 'Frankenstein'],
    question2: ['A. Smiley', 'B. Bonnie', 'C. Chucky','D. Dolly']
  };

const correctAnswers = {
  question1: 'Frankenstein',
  question2: 'Chucky'
}
console.log(correctAnswers);

console.log(correctAnswers);
play.hide();
load.click(loadGame);

function loadGame(event) {
  play.show();
  landing.hide();
}


function printQuestion() {

  play.append(questions.question1);
}

printQuestion();


function createButtons () {

  for(let i = 0; i < answers.question1.length; i++) {
    buttons = $('<button></button>').text(answers.question1[i]);
    play.append(buttons);
  }
  return buttons;
}

createButtons();

$(buttons).click(function() {
  console.log('clicked');
  console.log($(this));
    if (buttons.text() === correctAnswers.question1) {
    play.hide();
    $('<div>You won!</div>');
  }

});

console.log(correctAnswers.question1);


  // function chooseAnswer(event) {
  //   if (event.target !== correctAnswers.question1 || correctAnswers.quetion2) {
  //     play.hide()
  //   }
  // }
  //     wrong.show()
  //     }
  //       else {
  //         $(correct).show();
  //         nextQuestions();
  // }
  // }
  // chooseAnswer();
});

