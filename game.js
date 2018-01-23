//Random word is getting selected and exported
var wordsToGuess = [" Montgomery", "Juneau", "Little Rock", "Sacramento", "Hartford", "Atlanta", "Boise", "Tallahassee", "Honolulu", "Boise", "Springfield"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;


/*U.S. State Capitals List
Alabama - Montgomery
Alaska - Juneau
Arizona - Phoenix
Arkansas - Little Rock
California - Sacramento
Colorado - Denver
Connecticut - Hartford
Delaware - Dover
Florida - Tallahassee
Georgia - Atlanta
Hawaii - Honolulu
Idaho - Boise
Illinois - Springfield*/