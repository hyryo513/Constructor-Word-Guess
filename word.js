var Letter = require("./letter");

function Word (wordForGuess){
    this.letterArray = [],
    this.wordArray = function(){
        this.letterArray = wordForGuess.split("");
        for(var i=0; i<this.letterArray.length; i++){
            this.letterArray[i] = new Letter(this.letterArray[i]);
        };
    },
    this.returnWord = function() {
        var returnWordArray = [];
        var returnLetter = "";
        for(var i=0; i<this.letterArray.length; i++){
            returnLetter = this.letterArray[i].returnLetter();
            returnWordArray.push(returnLetter);
        };
        return returnWordArray;
    },
    this.guessLetter = function(guessLetter){
        var foundLetter = false;
        for (var i=0; i<this.letterArray.length; i++){
            if(this.letterArray[i].letterResult(guessLetter)){
                foundLetter = true;
            };
        };
        return foundLetter;
    },
    this.guessWord = function(){
        var foundWord = false;
        var count = 0;
        for (var i=0; i<this.letterArray.length; i++){
            if(this.letterArray[i].guessResult){
                count++;
            };
        };
        if (count === this.letterArray.length){
            foundWord = true;
        }
        else {
            foundWord = false;
        }
        return foundWord;
    }   
};

module.exports = Word;
