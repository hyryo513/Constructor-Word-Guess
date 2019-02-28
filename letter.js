function Letter(letterForGuess){
    this.letterForGuess = letterForGuess,
    this.guessResult = false,
    this.returnLetter = function(){
        if(this.guessResult){
            return this.letterForGuess;
        }
        else{
            return "_";
        }
    },
    this.letterResult = function(letterInput){
        var foundLetter = false;
        if (!this.guessResult){
            if (this.letterForGuess === letterInput){
                this.guessResult = true;
                foundLetter = true;
            }
            else{
                this.guessResult = false;
            }
        };
        return foundLetter;
    }   
}; 

module.exports = Letter;