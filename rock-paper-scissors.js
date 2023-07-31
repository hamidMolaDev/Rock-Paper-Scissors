let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  };

updateScoreElement();
    
function playGame(playerMove) {
 
  const computerNumber = pickComputerNumber();
  
  let result = '';
  
  if (playerMove === 'Rock') {
    if (computerNumber === 'Rock') {
      result = 'Tie.';
    } else if (computerNumber === 'Paper') {
    result = 'You lose.';
    } else if (computerNumber === 'Scissors') {
      result = 'You win.';
    }
            
    } else if (playerMove === 'Paper') {
      if (computerNumber === 'Rock') {
          result = 'You win.';
        } else if (computerNumber === 'Paper') {
          result = 'Tie.';
        }
          else if (computerNumber === 'Scissors') {
            result = 'You lose.';
      }

    } else if (playerMove === 'Scissors') {          
       if (computerNumber === 'Rock') {
          result = 'You lose.';
        } else if (computerNumber === 'Paper') {
          result = 'You win.';
        }
          else if (computerNumber === 'Scissors') {
            result = 'Tie.';
          }
          
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }       

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
      .innerHTML = result;
    document.querySelector('.js-moves')
      .innerHTML = `You <img class="move-image" src="./rock-paper-scissors(images)/${playerMove}-emoji.png" alt="${playerMove}"> <img class="move-image" src="./rock-paper-scissors(images)/${computerNumber}-emoji.png" alt="${playerMove}"> Computer`;
  }
    function updateScoreElement () {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

function pickComputerNumber() {
  
  const randomNumber = Math.random();
  
  let computerNumber = '';
  

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerNumber = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerNumber = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1 ) {
      computerNumber = 'Scissors';
    } 
    
    return computerNumber;
  }  
   