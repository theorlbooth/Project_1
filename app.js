// * -------------------------------------------
// * --------------- Functions -----------------
// * -------------------------------------------

// function addDroid() {
//   bDroids.forEach((droid) => {
//     cells[droid].classList.add('bDroid')
//   })
// }

// function moveDroidRight() {
//   for (let i = 0; i < bDroids.length; i++) {
//     bDroids[i] += 1
//   }
// }

// function moveDroidLeft() {
//   for (let i = 0; i < bDroids.length; i++) {
//     bDroids[i] -= 1
//   }
// }


// * -------------------------------------------
// * ------------------ Grid -------------------
// * -------------------------------------------

const grid = document.querySelector('.grid')

const cells = []

const width = 9

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  cells.push(div)
}


// * -------------------------------------------
// * ----------------- mFalcon -----------------
// * -------------------------------------------

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



// * -------------------------------------------
// * ----------------- bDroids -----------------
// * -------------------------------------------

let bDroids = [0, 1, 2, 3, 4]

function addDroid() {
  const maxInd = bDroids.indexOf(findMax(bDroids))
  const minInd = bDroids.indexOf(findMin(bDroids))

  bDroids.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })

  cells[minInd].classList.add('min')
  cells[maxInd].classList.add('max')
}

function findIndexOfMinDroid() {
  return document.querySelector('.min')
}

function findIndexOfMaxDroid() {
  return document.querySelector('.max')
}
//  ! This all needs a rethink!!

console.log(findIndexOfMaxDroid(bDroids))
console.log(findIndexOfMinDroid(bDroids))

function moveDroidRight() {
  for (let i = 0; i < bDroids.length; i++) {
    bDroids[i] += 1
  }
}

function moveDroidLeft() {
  for (let i = 0; i < bDroids.length; i++) {
    bDroids[i] -= 1
  }
}

addDroid()


function moveDroidDown() {
  for (let i = 0; i < bDroids.length; i++) {
    bDroids[i] += width
  }
}

function removeDroids() {
  bDroids.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })
}


// * -------------------------------------------
// * -------------bDroids movement--------------
// * ------------------------------------------- 

// Making arrays manually for time being

// Movement R/L = width - starting bDroids in row.length


function findMin(array) {
  return Math.min.apply(Math, array)
}

function findMax(array) {
  return Math.max.apply(Math, array)
}

let movement = 0

const interval = setInterval(() => {
  // const max = findMax(bDroids)
  // const min = findMin(bDroids)

  // ! Add class 'min' and 'max' classes to to min and max droids so that when .droid is removed from them they're still tracked

  if (max < 8 ) {
    removeDroids()
    moveDroidRight()
    addDroid()
  } else if (max === 8) {
    removeDroids()
    moveDroidDown()
    addDroid()
  }


}, 1500);

