
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

// * -------------Min & Max rows--------------

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

let r1Droids = [0, 1, 2, 3]
let r2Droids = [14, 15, 16, 17]
let r3Droids = [18, 19, 20, 21]

// let allDroids = r1Droids + r2Droids + r3Droids // All droids in 1 array

let arrayAllDroids = []

arrayAllDroids.push(r1Droids, r2Droids, r3Droids) // Array of arrays





//  * -------- Adding bDroids ---------


//  * -------- Finding/Adding/Removing Lead ---------

function findLead(array) {
  return Math.max.apply(Math, array)
}

function addLead(index) {
  cells[index].classList.add('lead')
}

function removeLead(index) {
  cells[index].classList.remove('lead')
}


//  * -------- Finding/Adding/Removing Tail ---------

function findTail(array) {
  return Math.min.apply(Math, array)
}

function addTail(index) {
  cells[index].classList.add('tail')
}

function removeTail(index) {
  cells[index].classList.remove('tail')
}





// ! Would it be possible to loop through 3 arrays here?
// ! Array of droids, array of lead, array of tail

//  * -------- Adding/Removing Droids ---------

function addDroids(array) {
  array.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })
  addLead(findLead(array))
  addTail(findTail(array))
}

addDroids(r1Droids)
addDroids(r2Droids)
addDroids(r3Droids)


function removeDroids(array) {
  array.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })
  removeLead(findLead(array))
  removeTail(findTail(array))
}





// * -------------bDroids movement--------------


// * Right moving rows = 1, 3, 5, 7 (always odd numbers, not matter how many rows)
// * Left moving rows = 2, 4, 6, 8 (always even numbers, not matter how many rows)


// * This would mean 'n' numbers of rows has to be odd (i.e width has to be odd)


function moveDroidsRight(array) {
  removeDroids(array)
  for (let i = 0; i < array.length; i++) {
    array[i] += 1
  }
  addDroids(array)
}


function moveDroidsLeft(array) {
  removeDroids(array)
  for (let i = 0; i < array.length; i++) {
    array[i] -= 1
  }
  addDroids(array)
}


function moveDroidsDown(array) {
  removeDroids(array)
  for (let i = 0; i < array.length; i++) {
    array[i] += width
  }
  addDroids(array)
}




function moveAllDroids(array) {
  const lead = findLead(array)
  const tail = findTail(array)
  if (lead < row1End) {
    // Row 1 (Right)
    moveDroidsRight(array)
  } else if (lead === row1End) {
    // Down
    moveDroidsDown(array)
  } else if (tail > row2Beg && tail < row2End) {
    // Row 2 (Left)
    moveDroidsLeft(array)
  } else if (tail === row2Beg) {
    // Down
    moveDroidsDown(array)
  } else if (lead < row3End && lead > row3Beg) {
    // Row 3 (Right)
    moveDroidsRight(array)
  } else if (lead === row3End) {
    // Down
    moveDroidsDown(array)
  } else if (tail > row4Beg && tail < row4End) {
    // Row 4 (Left)
    moveDroidsLeft(array)
  } else if (tail === row4Beg) {
    // Down
    moveDroidsDown(array)
  } else if (lead < row5End && lead > row5Beg) {
    // Row 5 (Right)
    moveDroidsRight(array)
  } else if (lead === row5End) {
    // Down
    moveDroidsDown(array)
  } else if (tail > row6Beg && tail < row6End) {
    // Row 6 (Left)
    moveDroidsLeft(array)
  } else if (tail === row6Beg) {
    // Down
    moveDroidsDown(array)
  } else if (lead < row7End && lead > row7Beg) {
    // Row 7 (Right)
    moveDroidsRight(array)
  } else if (lead === row7End) {
    // Down
    moveDroidsDown(array)
  } else if (tail > row8Beg && tail < row8End) {
    // Row 8 (Left)
    moveDroidsLeft(array)
  } else if (tail === row8Beg) {
    // Down
    moveDroidsDown(array)
  } else if (lead < row9End && lead > row9Beg) {
    // Row 9 (Right)
    moveDroidsRight(array)
  }
}





const interval = setInterval(() => {
  moveAllDroids(r1Droids)
  moveAllDroids(r2Droids)
  moveAllDroids(r3Droids)
}, 500)


// * ------------Timed Movement--------------

// removeDroids()
// moveDroidsRight(bDroids)
// addDroids()
