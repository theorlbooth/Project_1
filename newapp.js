
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


const allDroids = [0, 1, 2, 3, 14, 15, 16, 17, 18, 19, 20, 21]


let arrayAllDroids = [[0, 1, 2, 3], [14, 15, 16, 17], [18, 19, 20, 21]]

// let arrayAllDroids = []


// function splitUpDroids(size) {
//   for (let i = 0; i < allDroids.length; i += size) {
//     arrayAllDroids.push(allDroids.slice(i, i + size))
//   }
//   return arrayAllDroids
// }

// function deleteDroid(value) {
//   delete allDroids[allDroids.indexOf(value)]
//   arrayAllDroids = []
//   splitUpDroids(4)
// }

function deleteDroid(value) {
  delete arrayAllDroids[0][arrayAllDroids[0].indexOf(value)]
  delete arrayAllDroids[1][arrayAllDroids[1].indexOf(value)]
  delete arrayAllDroids[2][arrayAllDroids[2].indexOf(value)]
}


// splitUpDroids(4)




const arrayLeadsAndTails = [[0, 3], [14, 17], [18, 21]] // ! Put function together to do this automatically 
// ! However if done manually, would allow for lead/tail to be placed wherever (i.e different starting positions for droids)


// const leadDroids = []
// const tailDroids = []

// function findLeadAndTail(array) {
//   for (let i = 0; i < arrayAllDroids.length; i++) {
//     leadDroids.push(findLead(array[i]))
//     tailDroids.push(findTail(array[i]))
//   }
// }

// findLeadAndTail(arrayAllDroids)




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


//  * -------- Moving Lead & Tail ---------

function moveLAndTRight(array) {
  removeLead(array[1])
  removeTail(array[0])
  for (let i = 0; i < array.length; i++) {
    array[i] += 1
  }
  addLead(array[1])
  addTail(array[0])
}

function moveLAndTLeft(array) {
  removeLead(array[1])
  removeTail(array[0])
  for (let i = 0; i < array.length; i++) {
    array[i] -= 1
  }
  addLead(array[1])
  addTail(array[0])
}

function moveLAndTDown(array) {
  removeLead(array[1])
  removeTail(array[0])
  for (let i = 0; i < array.length; i++) {
    array[i] += width
  }
  addLead(array[1])
  addTail(array[0])
}


//  * -------- Adding/Removing Droids ---------

function addDroids(array) {
  array.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })
}

function removeDroids(array) {
  array.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })
}


// ! Put function together for below:
addDroids(arrayAllDroids[0])
addDroids(arrayAllDroids[1])
addDroids(arrayAllDroids[2])

addLead(arrayLeadsAndTails[0][1])
addTail(arrayLeadsAndTails[0][0])

addLead(arrayLeadsAndTails[1][1])
addTail(arrayLeadsAndTails[1][0])

addLead(arrayLeadsAndTails[2][1])
addTail(arrayLeadsAndTails[2][0])
// ! ==============================


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



//  * -------- Moving All ---------

function moveAllDroids(array, array2) {
  const lead = findLead(array2)
  const tail = findTail(array2)
  if (lead < row1End) {
    // Row 1 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
  } else if (lead === row1End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (tail > row2Beg && tail < row2End) {
    // Row 2 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
  } else if (tail === row2Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (lead < row3End && lead > row3Beg) {
    // Row 3 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
  } else if (lead === row3End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (tail > row4Beg && tail < row4End) {
    // Row 4 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
  } else if (tail === row4Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (lead < row5End && lead > row5Beg) {
    // Row 5 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
  } else if (lead === row5End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (tail > row6Beg && tail < row6End) {
    // Row 6 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
  } else if (tail === row6Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (lead < row7End && lead > row7Beg) {
    // Row 7 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
  } else if (lead === row7End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (tail > row8Beg && tail < row8End) {
    // Row 8 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
  } else if (tail === row8Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
  } else if (lead < row9End && lead > row9Beg) {
    // Row 9 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
  }
}


//  * -------- SetInterval ---------

// const interval = setInterval(() => {
//   moveAllDroids(arrayAllDroids[0], arrayLeadsAndTails[0])
//   moveAllDroids(arrayAllDroids[1], arrayLeadsAndTails[1])
//   moveAllDroids(arrayAllDroids[2], arrayLeadsAndTails[2])
// }, 3000)











// * -------------------------------------------
// * ------------------ Laser ------------------
// * -------------------------------------------


// ! This is making the laser move with the arrow keys => need to think of way to get the laser to start hidden, then appear at mFalcon - width

document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === 'ArrowUp' && !(laser < (width * (width - 2)))) {
    cells[laser].classList.remove('laser')
    laser -= width
    cells[laser].classList.add('laser')
  } else if (key === 'ArrowDown' && (laser < (width ** 2) - width)) {
    cells[laser].classList.remove('laser')
    laser += width
    cells[laser].classList.add('laser')
  } else if (key === 'ArrowLeft' && !(laser % width === 0)) {
    cells[laser].classList.remove('laser')
    laser -= 1
    cells[laser].classList.add('laser')
  } else if (key === 'ArrowRight' && !(laser % width === width - 1)) {
    cells[laser].classList.remove('laser')
    laser += 1
    cells[laser].classList.add('laser')
  }
})










function addLaser() {
  cells[laser].classList.add('laser')
}


function removeLaser() {
  cells[laser].classList.remove('laser')
}


function moveLaser() {
  laser -= width
}

let laser = mFalcon

addLaser()

let interval2 =

  // ! Need to close off event listener so can't be pressed over and over again (if allowing for only 1 laser at at time)
  document.addEventListener('keydown', (event) => {
    const key = event.key
    if (key === ' ') {
      interval2 = setInterval(() => {
        if (laser > 0) {
          removeLaser()
          moveLaser()
          addLaser()
          droidHit()
        } else {
          clearInterval(interval2)
        }
      }, 200)
    } else {
      laser = mFalcon
      return
    }
  })




function droidHit() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      deleteDroid(i)
      clearInterval(interval2)
      removeLaser()
      laser = mFalcon
    }
  }
}