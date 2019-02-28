var Word = require("./word");
var inquirer = require("inquirer");

var wordList = [
    "alamogordo",
    "phosphorylating",
    "unexcessive",
    "outguard",
    "zamora",
    "separatory",
    "polymerize",
    "titulary",
    "ambidextrously",
    "defensive"
]

var word;
var guessNumber;
var correctWord = false;

function initializtion(){
    word = new Word(wordList[Math.floor(Math.random() * 10)]);
    word.wordArray();
    guessNumber = 10;
    correctWord = false;
    console.log(word.returnWord());
};

function mainFunction(){
    inquirer.prompt(
        {
          type: "input",
          name: "letterInput",
          message: "Guess a letter!"
        }
    ).then(function(response){
        if(word.guessLetter(response.letterInput)){
            console.log(word.returnWord());       
            if(word.guessWord()){
                console.log("Correct!");
                console.log("You got it right! Next Word!");
                initializtion();
                mainFunction();
            }
            else{
                console.log("Correct!");
                mainFunction();
            };
        }
        else {
            guessNumber--;
            if (guessNumber === 0){
                console.log("Game Over! Next Word!");
                initializtion();
                mainFunction();
            }
            else{
            console.log("Incorrect!");
            console.log(guessNumber + " guesses remaining!!");
            console.log(word.returnWord());   
            mainFunction();
            };
        }
    });
}

initializtion();

mainFunction();