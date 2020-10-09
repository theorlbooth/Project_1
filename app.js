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

// function moveDroidDown() {
//   for (let i = 0; i < bDroids.length; i++) {
//     bDroids[i] += width
//   }
// }

// function removeDroids() {
//   bDroids.forEach((droid) => {
//     cells[droid].classList.remove('bDroid')
//   })
// }

// function findRowStarts(width) {
//   for (let i = 1; i <= width; i++) {
//     gridStarts.push(width * (i - 1))
//   }
//   return gridStarts
// }

// function findRowEnds(width) {
//   for (let i = 1; i <= width; i++) {
//     gridEnds.push(((width * (width - (width - i))) - 1))
//   }
//   return gridEnds
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



const gridStarts = [0] // * Starting at 0 in order to be able to call the right number based on the row number
const gridEnds = [0] // * Starting at 0 in order to be able to call the right number based on the row number

function findRowStarts(width) {
  for (let i = 1; i <= width; i++) {
    gridStarts.push(width * (i - 1))
  }
  return gridStarts
}

function findRowEnds(width) {
  for (let i = 1; i <= width; i++) {
    gridEnds.push(((width * (width - (width - i))) - 1))
  }
  return gridEnds
}

findRowStarts(width)
findRowEnds(width)


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



// ! -------------------------------------------
// ! ----------- Below needs work! -------------
// ! -------------------------------------------













// * -------------------------------------------
// * ----------------- bDroids -----------------
// * -------------------------------------------

let bDroids = [0, 1, 2, 3, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]


//  ! Need to find the 'min droid' & 'max droid' on each row

//  * row 1 = (x >= gridStart[1]) && (x <= girdEnds[1])
//  * row 2 = (x >= gridStart[2]) && (x <= girdEnds[2])
//  * row 3 = (x >= gridStart[3]) && (x <= girdEnds[3])

//  * row n = (x >= gridStart[n]) && (x <= girdEnds[n])

// for (let i = 1; i <= gridStarts.length; i++) {
//   if ()
// }

//  ! Need to create array of droids for each row!!

const droidsInRows = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }

const droidsRow_1 = []
const droidsRow_2 = []
const droidsRow_3 = []
const droidsRow_4 = []
const droidsRow_5 = []
const droidsRow_6 = []
const droidsRow_7 = []
const droidsRow_8 = []
const droidsRow_9 = []


bDroids.forEach((droid) => {
  if (droid > gridStarts[1] && droid < gridEnds[1]) {
    droidsRow_1.push(droid)
  } else if (droid > gridStarts[2] && droid < gridEnds[2]) {
    droidsRow_2.push(droid)
  } else if (droid > gridStarts[3] && droid < gridEnds[3]) {
    droidsRow_3.push(droid)
  } else if (droid > gridStarts[4] && droid < gridEnds[4]) {
    droidsRow_4.push(droid)
  } else if (droid > gridStarts[5] && droid < gridEnds[5]) {
    droidsRow_5.push(droid)
  } else if (droid > gridStarts[6] && droid < gridEnds[6]) {
    droidsRow_6.push(droid)
  } else if (droid > gridStarts[7] && droid < gridEnds[7]) {
    droidsRow_7.push(droid)
  } else if (droid > gridStarts[8] && droid < gridEnds[8]) {
    droidsRow_8.push(droid)
  } else if (droid > gridStarts[9] && droid < gridEnds[9]) {
    droidsRow_9.push(droid)
  }
})


console.log(droidsRow_1)
console.log(droidsRow_2)
console.log(droidsRow_3)
console.log(droidsRow_4)
console.log(droidsRow_5)
console.log(droidsRow_6)
console.log(droidsRow_7)
console.log(droidsRow_8)
console.log(droidsRow_9)

// console.log(droidsInRows)

// for (i = 0; i <= cells.length; i++) {
//   if (cells[i].classList.contains('bDroid')){
//     console.log('bdroid')
//   }
// }

// console.log(droidsInRows)

function findMin(array) {
  return Math.min.apply(Math, array)
}

function findMax(array) {
  return Math.max.apply(Math, array)
}


function addDroid() {
  const droidMaxInd = bDroids.indexOf(findMax(bDroids))
  const droidMinInd = bDroids.indexOf(findMin(bDroids))

  bDroids.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })

  cells[droidMinInd].classList.add('min')
  cells[droidMaxInd].classList.add('max')
}

function findIndexOfMinDroid() {
  return document.querySelector('.min')
}

function findIndexOfMaxDroid() {
  return document.querySelector('.max')
}
//  ! This all needs a rethink!!

// console.log(findIndexOfMaxDroid(bDroids))
// console.log(findIndexOfMinDroid(bDroids))

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



let movement = 0

// const interval = setInterval(() => {
  // const max = findMax(bDroids)
  // const min = findMin(bDroids)

  // ! Add class 'min' and 'max' classes to to min and max droids so that when .droid is removed from them they're still tracked

//   if (max < 8 ) {
//     removeDroids()
//     moveDroidRight()
//     addDroid()
//   } else if (max === 8) {
//     removeDroids()
//     moveDroidDown()
//     addDroid()
//   }


// }, 1500)