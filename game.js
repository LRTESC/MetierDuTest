const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

const WORD_LIST = ["cat", "dog", "tree", "car", "book", "computer", "pizzas", "guitar", "oceans", "jungle", "xylophone", "crocodile", "quicksand", "zigzag", "vortex"];

class Game {
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
                return WORD_LIST.filter(word => word.length <= 5)
            case MEDIUM:
                return WORD_LIST.filter(word => word.length > 5 && word.length <= 7)
            case HARD:
                return WORD_LIST.filter(word => word.length > 7)
        }
    }

    getRandomWord(difficulty) {
        const filteredWords = this.filteredWordListByDifficulty(difficulty)
        return filteredWords[this.randomIndex(filteredWords)]
    }

    randomIndex(array){
        return Math.floor(Math.random() * array.length)
    }
}

module.exports = {Game: Game, EASY: EASY, MEDIUM: MEDIUM, HARD: HARD, WORD_LIST: WORD_LIST}
