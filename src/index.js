if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const reset = () => {
  const cells = $$('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
    cells[i].dataset.player = 'empty'
    const createCellImage = document.createElement('img')
    createCellImage.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/click.png')
    cells[i].appendChild(createCellImage)
    createCellImage.className = 'pointer'
  }
  $('body').className = 'main'
}
window.reset = reset

const main = () => {
  const cells = $$('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
    const createCellImage = document.createElement('img')
    createCellImage.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/click.png')
    cells[i].appendChild(createCellImage)
    createCellImage.className = 'pointer'
  }
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

  $('button.play-again').addEventListener('click', () => { reset() })
  $('button.reset').addEventListener('click', () => { reset() })
}

const checkWin = () => {
  if (($$('td.p0[data-player=x]').length === 3) ||
      ($$('td.p1[data-player=x]').length === 3) ||
      ($$('td.p2[data-player=x]').length === 3) ||
      ($$('td.p3[data-player=x]').length === 3) ||
      ($$('td.p4[data-player=x]').length === 3) ||
      ($$('td.p5[data-player=x]').length === 3) ||
      ($$('td.p6[data-player=x]').length === 3) ||
      ($$('td.p7[data-player=x]').length === 3) ||
      ($$('td.p8[data-player=x]').length === 3)) {
    $('h3.winner').textContent = 'the crabs win!'
    $('body').className = 'modal'
  }
  if (($$('td.p0[data-player=o]').length === 3) ||
      ($$('td.p1[data-player=o]').length === 3) ||
      ($$('td.p2[data-player=o]').length === 3) ||
      ($$('td.p3[data-player=o]').length === 3) ||
      ($$('td.p4[data-player=o]').length === 3) ||
      ($$('td.p5[data-player=o]').length === 3) ||
      ($$('td.p6[data-player=o]').length === 3) ||
      ($$('td.p7[data-player=o]').length === 3) ||
      ($$('td.p8[data-player=o]').length === 3)) {
    $('h3.winner').textContent = 'the seagulls win!'
    $('body').className = 'modal'
  }
  if (checkDraw()) {
    cat()
    document.body.className = 'cat'
  }
}

const checkDraw = () => {
  const checkCells = $$('td')
  const allMoves = []
  for (var i = 0; i < checkCells.length; i++) {
    allMoves.push(checkCells[i].textContent)
  }
  return allMoves.every((move) => {
    return move !== ''
  })
}

const cat = () => {
  console.log('cat')
  const cells = $$('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
    cells[i].dataset.player = 'empty'
    const createCellImage = document.createElement('img')
    createCellImage.setAttribute('src', 'http://www.mobymusic.biz/images/register/user/felix_the_cat.png')
    cells[i].appendChild(createCellImage)
  }
}

$('button.play-again').addEventListener('click', () => { reset() })

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
