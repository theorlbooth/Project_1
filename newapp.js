
window.addEventListener("keydown", function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false)


// * -------------------------------------------
// * -------------Score & Lives ----------------
// * -------------------------------------------

let score = 0
let lives = 3

const scoretally = document.querySelector('#score')
const livestally = document.querySelector('#lives')

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

// [[0, 1, 2, 3], [14, 15, 16, 17], [18, 19, 20, 21]]
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

// function deleteDroid(value) {
//   delete arrayAllDroids[0][arrayAllDroids[0].indexOf(value)]
//   delete arrayAllDroids[1][arrayAllDroids[1].indexOf(value)]
//   delete arrayAllDroids[2][arrayAllDroids[2].indexOf(value)]
// }


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

// function addDroids(array) {
//   array.forEach((droid) => {
//     if (!cells[droid].classList.contains('hit')) {
//       cells[droid].classList.add('bDroid')
//     }
//   })
// }

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

function moveAllDroids(array, array2, array3) {
  const lead = findLead(array2)
  const tail = findTail(array2)
  if (lead < row1End) {
    // Row 1 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
    moveHitsRight(array3)
  } else if (lead === row1End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (tail > row2Beg && tail < row2End) {
    // Row 2 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
    moveHitsLeft(array3)
  } else if (tail === row2Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (lead < row3End && lead > row3Beg) {
    // Row 3 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
    moveHitsRight(array3)
  } else if (lead === row3End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (tail > row4Beg && tail < row4End) {
    // Row 4 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
    moveHitsLeft(array3)
  } else if (tail === row4Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (lead < row5End && lead > row5Beg) {
    // Row 5 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
    moveHitsRight(array3)
  } else if (lead === row5End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (tail > row6Beg && tail < row6End) {
    // Row 6 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
    moveHitsLeft(array3)
  } else if (tail === row6Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (lead < row7End && lead > row7Beg) {
    // Row 7 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
    moveHitsRight(array3)
  } else if (lead === row7End) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (tail > row8Beg && tail < row8End) {
    // Row 8 (Left)
    moveDroidsLeft(array)
    moveLAndTLeft(array2)
    moveHitsLeft(array3)
  } else if (tail === row8Beg) {
    // Down
    moveDroidsDown(array)
    moveLAndTDown(array2)
    moveHitsDown(array3)
  } else if (lead < row9End && lead > row9Beg) {
    // Row 9 (Right)
    moveDroidsRight(array)
    moveLAndTRight(array2)
    moveHitsRight(array3)
  }
}

//  * -------- SetInterval ---------

// const interval = setInterval(() => {
//   moveAllDroids(arrayAllDroids[0], arrayLeadsAndTails[0], arrayHitDroids[0])
//   moveAllDroids(arrayAllDroids[1], arrayLeadsAndTails[1], arrayHitDroids[1])
//   moveAllDroids(arrayAllDroids[2], arrayLeadsAndTails[2], arrayHitDroids[2])
// }, 3000)











// * -------------------------------------------
// * ------------------ Laser ------------------
// * -------------------------------------------



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

let interval3 = setInterval(() => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('laser') === true) {
      removeLaser(i)
      addLaser(i - width)
      droidHit()
    }
  }
}, 200)


//  * ------------- Hit Droids --------------


const arrayHitDroids = [[], [], []]



function droidHit() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('hit') === true && cells[i].classList.contains('laser') === true) {
      return
    } else if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
        delete arrayAllDroids[0].splice([arrayAllDroids[0].indexOf(i)],1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
        delete arrayAllDroids[1].splice([arrayAllDroids[1].indexOf(i)],1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitDroids[2].push(i)
        delete arrayAllDroids[2].splice([arrayAllDroids[2].indexOf(i)],1)
      }
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      score += 100
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
    }
  }
}


//  * ------------- Add/Remove Hits --------------

function addHits(array) {
  array.forEach((hit) => {
    cells[hit].classList.add('hit')
  })
}

function removeHits(array) {
  array.forEach((hit) => {
    cells[hit].classList.remove('hit')
  })
}

//  * ------------- Hits Movement --------------

function moveHitsRight(array) {
  removeHits(array)
  for (let i = 0; i < array.length; i++) {
    array[i] += 1
  }
  addHits(array)
}

function moveHitsLeft(array) {
  removeHits(array)
  for (let i = 0; i < array.length; i++) {
    array[i] -= 1
  }
  addHits(array)
}

function moveHitsDown(array) {
  removeHits(array)
  for (let i = 0; i < array.length; i++) {
    array[i] += width
  }
  addHits(array)
}



// =============== Multiple ELasers ===============

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
      removeELaser(i)
    }
  }
}

// let interval4 = setInterval(() => {
//   console.log(arrayAllDroids)
//   const randomIndex = Math.floor(Math.random() * (arrayAllDroids.flat(Infinity).length))
//   addELaser(arrayAllDroids.flat(Infinity)[randomIndex])
//   console.log(randomIndex)
//   console.log(arrayAllDroids.flat(Infinity))
// }, 2000)


// let interval5 = setInterval(() => {
//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i].classList.contains('elaser') === true) {
//       removeELaser(i)
//       addELaser(i + width)
//       mFalconHit()
//       return
//     }
//   }
// }, 200)






const modal = document.querySelector('#myModal')


const button = document.querySelector('#rules')

const span = document.querySelector('.close')

button.onclick = function() {
  modal.style.display = 'block'
}

span.onclick = function() {
  modal.style.display = 'none'
}

