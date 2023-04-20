const fs = require("fs")
const csv = require("csv-parser")
const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

const WORD_LIST_EXAMPLE = ["cat", "dog", "tree", "car", "book", "computer", "pizzas", "guitar", "oceans", "jungle", "xylophone", "crocodile", "quicksand", "zigzag", "vortex"];


class Game {
    WORD_LIST = []
    constructor()
    {
        this.listOfWords = [];
        this.numberOfTry = 5;
        //npm install csv-parser
        fs.createReadStream('words_fr.txt')
            .pipe(csv())
            .on('data', (row) => {
                this.listOfWords.push(row.word.toLowerCase());
            })
            .on('end', () => {
                console.log(this.listOfWords);
                console.log('CSV file successfully processed');
                this.WORD_LIST = this.listOfWords
            });
    }
    guess(oneLetter) {
        if (oneLetter === 'a') {
            return true
        } else {
            return false
        }
    }

    filteredWordListByDifficulty(difficulty) {
        switch (difficulty) {
            case EASY:
                return this.WORD_LIST.filter(word => word.length <= 5)
            case MEDIUM:
                return this.WORD_LIST.filter(word => word.length > 5 && word.length <= 7)
            case HARD:
                return this.WORD_LIST.filter(word => word.length > 7)
        }
    }

    getRandomWord(difficulty) {
        const filteredWords = this.filteredWordListByDifficulty(difficulty)
        return filteredWords[this.randomIndex(filteredWords)]
    }

    randomIndex(array) {
        return Math.floor(Math.random() * array.length)
    }
}

module.exports = {Game: Game, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD}
