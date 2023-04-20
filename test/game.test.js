const {Game, EASY,MEDIUM,HARD} = require('../game.js');
const chai = require('chai');

const expect = chai.expect;

let game = new Game();
describe('game engine test', function () {
    describe('when a letter is found', function () {
        it('It should return true when my letter is found', function(){
            expect(game.guess('a')).is.true
        })

    })
    describe('when a letter is found', function () {
        it('It should return false when my letter is found', function () {
            expect(game.guess('z')).is.false
        })

    })
    describe('when a difficulty is set on', function() {
        it('EASY it should return a word with a length less than six', function(){
            expect(game.getRandomWord(EASY).length).is.lessThanOrEqual(5)
        })
        it('MEDIUM it should return a word with a length greater or equal than six and less than or equal seven', function(){
            expect(game.getRandomWord(MEDIUM).length).is.greaterThanOrEqual(6).lessThanOrEqual(7)
        })
        it('HARD it should return a word with a length greater than eight', function(){
            expect(game.getRandomWord(HARD).length).is.greaterThanOrEqual(8)
        })
        it('should filter a word in the word list by the difficulty', function () {
            expect(game.filteredWordListByDifficulty(EASY).length).is.lessThan(game.WORD_LIST.length)
        });
        it('should return random index from an array', function () {
            const array = ['easy','test','lol','cat','dog','xylophone']
            expect(game.randomIndex(array)).to.be.an('number').is.greaterThanOrEqual(0)
                .and.is.lessThanOrEqual(array.length)
        });
    })
})