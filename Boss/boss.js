
// * === Disbale Keys in Window ===

window.addEventListener('keydown', function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false)


// * === Modals ===

const overlay2 = document.querySelector('#overlay2')

function gameOver() {
  gameOverModal.style.display = 'block'
  const playerScore = document.querySelector('#player-score')
  playerScore.innerHTML = score
  overlay2.style.display = 'block'
}

function gameWon() {
  gameOverModal.style.display = 'block'
  const playerScore = document.querySelector('#player-score')
  playerScore.innerHTML = score
  const winHeader = document.querySelector('#win-header')
  winHeader.innerHTML = 'GAME WON!'
  const winP = document.querySelector('#win-p')
  winP.innerHTML = 'Victory is yours!'
  overlay2.style.display = 'block'
}

// --- Rules Modal ---

const rulesModal = document.querySelector('#rules-modal')

const span3 = document.querySelector('#span-3')

const overlay = document.querySelector('#overlay')

overlay.onclick = function(){
  rulesModal.style.display = 'none'
  scoresModal.style.display = 'none'
  overlay.style.display = 'none'
}

span3.onclick = function () {
  rulesModal.style.display = 'none'
  overlay.style.display = 'none'
}

const rulesButton = document.querySelector('#rules')

rulesButton.onclick = function () {
  rulesModal.style.display = 'block'
  overlay.style.display = 'block'
}


// --- Game Over Modal ---

const gameOverModal = document.querySelector('#gameover-modal')

const span1 = document.querySelector('#span-1')

span1.onclick = function () {
  gameOverModal.style.display = 'none'
}


// --- Scoreboard Modal ---

const scoresModal = document.querySelector('#scores-modal')

const span5 = document.querySelector('#span-5')

span5.onclick = function () {
  scoresModal.style.display = 'none'
  overlay.style.display = 'none'
}

const scoresButton = document.querySelector('#scoreboard')

scoresButton.onclick = function () {
  scoresModal.style.display = 'block'
  overlay.style.display = 'block'
}


//### --- Start Button ---

const startButton = document.querySelector('#start')

function startGame() {
  interval = setInterval(() => {
    moveDarth()
  }, 1500)

  interval2 = setInterval(() => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('laser') === true) {
        removeLaser(i)
        addLaser(i - width)
        darthHit()
      }
    }
  }, 200)

  interval3 = setInterval(() => {
    for (let i = 0; i < 4; i++) {
      addELaser(arrayDarth[i])
    }
  }, 1000)

  interval4 = setInterval(() => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('elaser') === true) {
        removeELaser(i)
        addELaser(i + width)
        mFalconHit()
        return
      }
    }
  }, 50)
}

startButton.onclick = function () {
  startGame()
}


// --- Quit Buttons ---

const quitButton = document.querySelector('#quit-button')

quitButton.onclick = function () {
  window.location.reload()
}


// --- Restart Buttons ---

const restartButton = document.querySelector('#restart-button')

restartButton.onclick = function () {
  document.location.reload()
  startGame()
}


// * === Score & Lives ===

let score = 0

let lives = 3


const scoretally = document.querySelector('#score')
const livestally = document.querySelector('#lives')
const darthlivestally = document.querySelector('#darth-lives')


//### * === Grid ===

const grid = document.querySelector('.grid')

const cells = []

const width = 9

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  cells.push(div)
}


// * === Min & Max Rows ===

const row1Beg = (width * (1 - 1))
const row2Beg = (width * (2 - 1))
const row3Beg = (width * (3 - 1))
const row4Beg = (width * (4 - 1))
const row5Beg = (width * (5 - 1))
const row6Beg = (width * (6 - 1))
const row7Beg = (width * (7 - 1))
const row8Beg = (width * (8 - 1))
const row9Beg = (width * (9 - 1))

const row1End = ((width * (width - (width - 1))) - 1)
const row2End = ((width * (width - (width - 2))) - 1)
const row3End = ((width * (width - (width - 3))) - 1)
const row4End = ((width * (width - (width - 4))) - 1)
const row5End = ((width * (width - (width - 5))) - 1)
const row6End = ((width * (width - (width - 6))) - 1)
const row7End = ((width * (width - (width - 7))) - 1)
const row8End = ((width * (width - (width - 8))) - 1)
const row9End = ((width * (width - (width - 9))) - 1)


// * === mFalcon ===

let mFalcon = 76

cells[mFalcon].classList.add('mFalcon')

document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === 'ArrowUp' && !(mFalcon < (width * (width - 2)))) {
    cells[mFalcon].classList.remove('mFalcon')
    mFalcon -= width
    cells[mFalcon].classList.add('mFalcon')
  } else if (key === 'ArrowDown' && (mFalcon < (width ** 2) - width)) {
    cells[mFalcon].classList.remove('mFalcon')
    mFalcon += width
    cells[mFalcon].classList.add('mFalcon')
  } else if (key === 'ArrowLeft' && !(mFalcon % width === 0)) {
    cells[mFalcon].classList.remove('mFalcon')
    mFalcon -= 1
    cells[mFalcon].classList.add('mFalcon')
  } else if (key === 'ArrowRight' && !(mFalcon % width === width - 1)) {
    cells[mFalcon].classList.remove('mFalcon')
    mFalcon += 1
    cells[mFalcon].classList.add('mFalcon')
  }
})


//### * === Darth ===

const possibleCells = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43]

let darthPosition = 22

let arrayDarth = [darthPosition, darthPosition + 1, darthPosition + width, darthPosition + width + 1]


addDarth()


//### * === Add/Remove Darth ===

function addDarth() {
  cells[darthPosition].classList.add('darth1')
  cells[darthPosition + 1].classList.add('darth2')
  cells[darthPosition + width].classList.add('darth3')
  cells[darthPosition + width + 1].classList.add('darth4')
  arrayDarth = [darthPosition, darthPosition + 1, darthPosition + width, darthPosition + width + 1]
}

function removeDarth() {
  cells[darthPosition + width + 1].classList.remove('darth4')
  cells[darthPosition + width].classList.remove('darth3')
  cells[darthPosition + 1].classList.remove('darth2')
  cells[darthPosition].classList.remove('darth1')
}



// * === Move Darth ===

function moveDarth() {
  removeDarth()
  darthPosition = possibleCells[Math.floor(Math.random() * possibleCells.length)]
  addDarth()
}



// * === Laser ===

let laser

function addLaser(index) {
  cells[index].classList.add('laser')
}

function removeLaser(index) {
  cells[index].classList.remove('laser')
}

document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === ' ') {
    laser = mFalcon - width
    addLaser(laser)
  }
})


// * === SumDroids ===

let darthLives = 8



//### * === Hit bDroids ===


function darthHit() {
  for (let i = 0; i < cells.length; i++) {

    if (cells[i].classList.contains('hit') === true && cells[i].classList.contains('laser') === true) {
      return
    } else if (cells[i].classList.contains('darth1') === true && cells[i].classList.contains('laser') === true) {
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
      darthlivestally.innerHTML = darthLives
    } else if (cells[i].classList.contains('darth2') === true && cells[i].classList.contains('laser') === true) {
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
      darthlivestally.innerHTML = darthLives
    } else if (cells[i].classList.contains('darth3') === true && cells[i].classList.contains('laser') === true) {
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
      darthlivestally.innerHTML = darthLives
    } else if (cells[i].classList.contains('darth4') === true && cells[i].classList.contains('laser') === true) {
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
      darthlivestally.innerHTML = darthLives
    }
    
    if (darthLives === 0) {
      gameWon()
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    }
  }
}



// * === Multiple ELasers ===

let interval
let interval2
let interval3
let interval4

function addELaser(index) {
  cells[index].classList.add('elaser')
}

function removeELaser(index) {
  cells[index].classList.remove('elaser')
}

function mFalconHit() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('mFalcon') === true && cells[i].classList.contains('elaser') === true) {
      lives -= 1
      livestally.innerHTML = lives
      score -= 250
      scoretally.innerHTML = score
      removeELaser(i)
    }
    if (lives === 0) {
      gameOver()
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    }
  }
}



// * === Local Storage ===

let playerScores = []
const scoreList = document.querySelector('ol')
const submit = document.querySelector('#submit-score')


if (localStorage) {
  playerScores = JSON.parse(localStorage.getItem('scores'))
  orderAndDisplayScores()
}

submit.addEventListener('click', () => {
  document.querySelector('#submit-score').disabled = true
  const newName = document.querySelector('input').value
  const finalScore = Number(document.querySelector('#player-score').innerHTML)
  const player = { name: newName, score: finalScore }
  console.log(player)
  playerScores.push(player)

  if (localStorage) {
    localStorage.setItem('scores', JSON.stringify(playerScores))
  }
  orderAndDisplayScores()
})


function orderAndDisplayScores() {
  const array = playerScores
    .sort((playerA, playerB) => playerB.score - playerA.score)
    .map(player => {
      return `<li>${player.name}............            ${player.score}</li>`
    })
  scoreList.innerHTML = array.join('')
}

