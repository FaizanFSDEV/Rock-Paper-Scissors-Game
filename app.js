let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');

const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')

const rock_div = document.querySelector('#Rock')
const paper_div = document.querySelector('#Paper')
const scissors_div = document.querySelector('#Scissors')


function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

function win(userCh, computerCh){
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${userCh} beats ${computerCh}. You win! 🔥` 

  const userChoice_div = document.querySelector('#'+userCh);
  userChoice_div.classList.add("green-glow");
  setTimeout(()=>{userChoice_div.classList.remove("green-glow")},300)
}

function lose(userCh, computerCh){
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${userCh} loses to ${computerCh}. You lost! 👎` 

  const userChoice_div = document.querySelector('#'+userCh);
  userChoice_div.classList.add("red-glow");
  setTimeout(()=>{userChoice_div.classList.remove("red-glow")},300)
}

function draw(userCh, computerCh){
  result_p.textContent = `${userCh} equal to ${computerCh}. It's draw! 👏 ` 

  const userChoice_div = document.querySelector('#'+userCh);
  userChoice_div.classList.add("green-glow");
  setTimeout(()=>{userChoice_div.classList.remove("gray-glow")},300)

}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'ScissorsPaper':
    case 'PaperRock':
      win(userChoice, computerChoice);
      break;
    case 'ScissorsRock':
    case 'PaperScissors':
    case 'RockPaper':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', function(){
    game('Rock');
  })
  paper_div.addEventListener('click', function(){
    game('Paper');;
  })
  scissors_div.addEventListener('click', function(){
    game('Scissors');;
  })
}

main();