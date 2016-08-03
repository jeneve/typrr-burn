var counter = 0;
var previousCharacter = null;

const Bird = require('./bird');
const Level = require('./level');
const KeyStroke = require('./keystroke');
const Game = require('./game');
const Painter = require('./painter')
const painter = new Painter();

var bird = new Bird(1);
// var highScore = localStorage['high score'] || 0;
var levelOneOptions = {
  number: 1,
  accumulatedScore: localStorage['high score'] || 0,
  bird: bird
}
var levelOne = new Level(levelOneOptions);

document.addEventListener('keyup', function startLevelOne(event){
  painter.removeInstructions();
	levelOne.render(0);
	bird.fall();
	this.removeEventListener('keyup', startLevelOne)
})

document.addEventListener('keyup', function keyStore(event){
  var levelNumber = Number($('#level').text())
  let levelOptions = {
    number: levelNumber,
    accumulatedScore: Number($('#score').text()),
    bird: bird
  }
  var level = new Level(levelOptions);

  let options = {
    currentText: $('#challenge-text').text(),
    char: event.key,
    level: level
  }
	let stroke = new KeyStroke(options);
	stroke.score().prepareForNext().updateScoreCard();
})

window.addEventListener('load', function startGame(event){
	var game = new Game();
  game.start();
})

window.addEventListener('keydown', function() {
  event.preventDefault();
})
