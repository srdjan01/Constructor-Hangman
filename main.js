var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randoWord = game.randoWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randoWord);
var maxGuesses = 15;
//This is when game is over
function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses.');
	return; 
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess a letter:',
		validate: function(str){
          //if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				var letter = letterInput.letter; 
				//Check for letter
				myWord.findLetter(letter); 
					if(myWord.isComplete()){ 
					console.log('Good Job! It is ' + myWord.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //Next guess
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess(); //Recursive call
				}
  );
}
//Start Game
takeAGuess(); 