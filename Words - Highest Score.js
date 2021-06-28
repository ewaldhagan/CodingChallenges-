// Given a string of words, you need to find the highest scoring word.
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//You need to return the highest scoring word as a string
//If two words score the same, return the word that appears earliest in the original string.
//All letters will be lowercase and all inputs will be valid.


function high(x){
    var highScore = 0;
      var word = '';
      var wordArr = x.split(' ');
      for (var i = 0; i < wordArr.length; i++) {
      var wordScore = 0;
        var iword = wordArr[i];
        for (var j = 0; j < iword.length; j++) {
        
          wordScore = wordScore + (iword.charCodeAt(j)-96);
          
        }
      
        if (wordScore > highScore){
           highScore = wordScore;
           word = iword;
        }
      }
      return word;
      
      }