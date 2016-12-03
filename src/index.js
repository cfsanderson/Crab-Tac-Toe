if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// "coin flip" button to see which player goes first?
// Message to ask the player (winner of coin toss) to select a square

// Start with a blank game board
const reset = () => {
  const cells = $$('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
    const createCellImage = document.createElement('img')
    createCellImage.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/click.png')
    cells[i].appendChild(createCellImage)
    createCellImage.className = 'pointer'
    $('h2').textContent = 'let\'s play!'
  }
}
window.reset = reset

// Player clicks on a square to place their X or O on the board

// Game continues till conditions for win/lose/draw are met
// Message says player X or O wins
// Keep track of wins/losses for X and O

const main = () => {
// Set initial value of cells to "click me"
  const cells = $$('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
    const createCellImage = document.createElement('img')
    createCellImage.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/click.png')
    cells[i].appendChild(createCellImage)
    createCellImage.className = 'pointer'
  }
// click to change cells to X or O
  let player = 'x'
  const cellClick = $$('td')
  for (let i = 0; i < cellClick.length; i++) {
    cellClick[i].addEventListener('click', () => {
      if (cellClick[i].textContent === '') {
        cellClick[i].textContent = player
        if (player === 'x') {
          player = 'o'
          cellClick[i].dataset.player = 'x'
          const createCrab = document.createElement('img')
          createCrab.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Caracangrejo.png')
          cellClick[i].appendChild(createCrab)
          checkWin()
        } else {
          player = 'x'
          cellClick[i].dataset.player = 'o'
          const createGull = document.createElement('img')
          createGull.setAttribute('src', 'http://vignette2.wikia.nocookie.net/hijotee827/images/9/9a/Seagull.png/revision/latest?cb=20140609233049')
          cellClick[i].appendChild(createGull)
          checkWin()
        }
      }
    })
  }

  $('button').addEventListener('click', () => { reset() })
}

const checkWin = () => {
  if ($$('td.p0[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p1[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p2[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p3[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p4[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p5[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p6[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p7[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p8[data-player=x]').length === 3) {
    $('h2.message').textContent = 'the crabs win!'
  }
  if ($$('td.p0[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p1[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p2[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p3[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p4[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p5[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p6[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p7[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
  if ($$('td.p8[data-player=o]').length === 3) {
    console.log('the seagulls win!')
    $('h2.message').textContent = 'the seagulls win!'
  }
}

document.addEventListener('DOMContentLoaded', main)

/* For this assignment you will design a simple game called "Tic Tac Toe".
The game is traditionally played on a 3x3 board between two players x and o.
The two players alternate between each other marking cells in the board.
During her turn a player can mark a single cell by placing a symbol in it (either an 'x' or an 'o' character).
A player who manages to mark a row, column, or a diagonal completely with his symbol first wins the game.
The game ends in a tie if no player manages to win after all the cells have been marked. Refer to examples below:

Empty Board
Player 'o' wins
Player 'x' wins
Game is a draw

Explorer Mode

Use appropriate HTML tags and CSS to design a tic-tac-toe board.
The game can be played by users clicking the game cells, alternating between x and o's turn
Make sure you indicate who's turn it is.
Show a modal/alert when the game is over, indicating who won, or a tie.
Style the page, have fun!
No linter warning.
There a dozens of ways to figure out if the game is over (and who won), So I'd like you to spend some time exploring options and try a few things. However, I don't want this to prevent you from completing the assignment, so I'll share a solution to this by Saturday afternoon in Slack, in case you haven't solved it on your own yet.

Adventure Mode

User sessionStorage or localStorage to persist the game's state between page reloads. (Add a reset button)
CSS: Can you animate the appearance/change from empty cells to X's and O's?

Epic Mode

It is possible to consistently make a computer play an unbeatable game of Tic Tac Toe. If you feel up to the challenge, make a single player version of the game to play against a computer AI who never lets you win. Hint: "Minimax". */

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
