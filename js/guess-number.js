const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//  Use a loop to create a number guessing game

for ( let i = 0; i <= 10; i++ ) {
 let guess = prompt(`You have 10 tries to guess a number between 1 and 10.`);

if (parseInt(guess) === randomNumber){
    message = `It took ${i} tries to guess the correct number: ${randomNumber}!`
    break;
  } else{
    message = `Sorry please try again. The number was ${randomNumber}`;
  }
}

main.innerHTML = `<h2>${message}</h2>`;
