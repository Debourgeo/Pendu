let givenWord = "BONJOUR";
let word = givenWord.toLowerCase();
let decomposedWord = word.split("");
let guess = [];
for (let i = 0; i < decomposedWord.length; i++) {
    guess[i] = "_";
}
let leftToGuess = decomposedWord.length;
let count = 0;

document.getElementById("run").addEventListener("click", () => {
    while (leftToGuess > 0) {
        function guessLetter() {
            let givenLetter = prompt("Guess a letter");
            let letter = givenLetter.toLowerCase();
            let match = false;
            for (let j = 0; j < decomposedWord.length; j++) {
                if (letter === decomposedWord[j]) {
                    alert("Congrats! You found one!");
                    guess[j] = letter;
                    match = true;
                    leftToGuess--;
                } else if (j == decomposedWord.length - 1 && match == false) {
                    alert("no match found, try again!");
                }
            }
        }

        guessLetter();
        count++;
        if (leftToGuess > 0) {
            alert(
                "This is your result for now: " +
                    guess.join(" ") +
                    "\nnumber of trials: " +
                    count
            );
        } else {
            alert("Congrats, you guess the word " + givenWord + " correctly!");
        }
        console.log(decomposedWord);
        console.log(guess);
    }
});
