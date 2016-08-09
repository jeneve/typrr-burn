var counter = 0;
var previousCharacter = null;

const Bird = require('./bird');
const Level = require('./level');
const KeyStroke = require('./keystroke');
const Game = require('./game');
const Painter = require('./painter')
const painter = new Painter();

var bird = new Bird(1);
var highScore = localStorage['high score'] || 0;
var levelOne = new Level(1, highScore, bird);

document.addEventListener('keyup', function startLevelOne(event){
  painter.removeInstructions();
	levelOne.render(0);
	bird.fall();
	this.removeEventListener('keyup', startLevelOne)
  keyTrigger();
})

function keyTrigger(){
  document.addEventListener('keyup', function keyStore(event){
  	let currentText = $('#challenge-text').text()
  	let char = String.fromCharCode(event.keyCode).toLowerCase();
  	var levelNumber = Number($('#level').text())
  	let level = new Level(levelNumber, Number($('#score').text()), bird)
  	let stroke = new KeyStroke(char, currentText, level)
  	stroke.score().prepareForNext().updateScoreCard();
document.addEventListener('endGame', function(){
  document.removeEventListener('keyup', keyStore)
})
    
  })
}


window.addEventListener('load', function startGame(event){
	var game = new Game();
  var $birdCanvas = $('birdCanvas')
  $birdCanvas.focus();
  game.start();
})


window.addEventListener('keydown', function(event) {
  if (event.keyCode === 32 || event.keyCode === 8){
    event.preventDefault();
  }
})
