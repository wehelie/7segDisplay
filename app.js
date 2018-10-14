const fs = require('fs')

let words = fs.readFileSync("words.txt").toString()

words = words.split('\n')

const avoidLetters = /[gkmqvwxz]/



console.log(words)