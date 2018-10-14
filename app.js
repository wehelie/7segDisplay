const fs = require('fs')

let words = fs.readFileSync("words.txt").toString()

words = words.split('\n')

const avoidLetters = /[gkmqvwxz]/

let longestAcceptedWord = ''

for (var testWord of words) {
    if (testWord.length <= longestAcceptedWord.length) {
        continue;
    }

    if (testWord.match(avoidLetters)) {
        continue;
    }

    longestAcceptedWord = testWord;
}


console.log(longestAcceptedWord)