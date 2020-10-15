
function findMin(array) {
  return Math.min.apply(Math, array)
}


function findMax(array) {
  return Math.max.apply(Math, array)
}


function findIndexOfMinDroid() {
  return document.querySelector('.min')
}

function findIndexOfMaxDroid() {
  return document.querySelector('.max')
}

function findMax(array) {
  let max = Math.max.apply(Math, array)
  if (max > 0) {
    return max
  }
}

const maxDroid = findMax(bDroids)

function addLead(droid) {
  cells[maxDroid].classList.add('lead')
}

// =======================================

function moveDroids() {
  for (let i = 0; i < bDroids.length; i++) {
    if (maxDroid % width !== 0) {
      bDroids[i] += 1
      console.log(maxDroid)
    } else if (maxDroid % width === 0) {
      bDroids[i] += width
      console.log(maxDroid)
    }
  }
}

// =======================================

function r1AddLead(array) {
  r1leadDroid = Math.max.apply(Math, array)
  cells[r1leadDroid].classList.add('lead')
}

function r2AddLead(array) {
  r2leadDroid = Math.max.apply(Math, array)
  cells[r2leadDroid].classList.add('lead')
}

function r3AddLead(array) {
  r3leadDroid = Math.max.apply(Math, array)
  cells[r3leadDroid].classList.add('lead')
}

function r1RemoveLead(array) {
  r1leadDroid = Math.max.apply(Math, array)
  cells[r1leadDroid].classList.remove('lead')
}

function r2RemoveLead(array) {
  r2leadDroid = Math.max.apply(Math, array)
  cells[r2leadDroid].classList.remove('lead')
}

function r3RemoveLead(array) {
  r3leadDroid = Math.max.apply(Math, array)
  cells[r3leadDroid].classList.remove('lead')
}


function addTail(array) {
  r1tailDroid = Math.min.apply(Math, array)
  cells[r1tailDroid].classList.add('tail')
}

function addTail(array) {
  r2tailDroid = Math.min.apply(Math, array)
  cells[r1tailDroid].classList.add('tail')
}

function addTail(array) {
  r2tailDroid = Math.min.apply(Math, array)
  cells[r1tailDroid].classList.add('tail')
}

function removeTail(array) {
  r1tailDroid = Math.min.apply(Math, array)
  cells[r1tailDroid].classList.remove('tail')
}

// =======================================

let r1leadDroid = findLead(r1Droids)
let r2leadDroid = findLead(r2Droids)
let r3leadDroid = findLead(r3Droids)


let r1tailDroid = findTail(r1Droids)
let r2tailDroid = findTail(r2Droids)
let r3tailDroid = findTail(r3Droids)

// =======================================

if (cells[droid].classList.contains('hit') !== true) {

  // =======================================

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

  // =======================================

  function droidHit() {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
        cells[i].classList.remove('bDroid')
        cells[i].classList.add('hit')
        // deleteDroid(i)
        clearInterval(interval2)
        removeLaser()
        laser = mFalcon
      }
    }
  }
}
// =======================================

function droidHit() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitDroids[2].push(i)
      }
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      clearInterval(interval2)
      removeLaser()
      laser = mFalcon
    }
  }
}

// =======================================

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


// =======================================


document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === ' ') {
    laser = mFalcon
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
  }
})

// =======================================


for (let i = 0; i < width - mFalcon; i++) {
  removeLaser()
  moveLaser()
  addLaser()
  droidHit()
  setTimeout(() => {
  }, 200)
}


// =======================================


//  !
// let interval5 = setInterval(() => {
//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i].classList.contains('laser') && cells[i].classList.contains('elaser')) {
//       cells[i].classList.remove('laser')
//       cells[i].classList.remove('elaser')
//     }
//   }
// }, 20)
//  !


// =======================================


function splitUpDroids(size) {
  for (let i = 0; i < allDroids.length; i += size) {
    arrayAllDroids.push(allDroids.slice(i, i + size))
  }
  return arrayAllDroids
}

function deleteDroid(value) {
  delete allDroids[allDroids.indexOf(value)]
  arrayAllDroids = []
  splitUpDroids(4)
}

function deleteDroid(value) {
  delete arrayAllDroids[0][arrayAllDroids[0].indexOf(value)]
  delete arrayAllDroids[1][arrayAllDroids[1].indexOf(value)]
  delete arrayAllDroids[2][arrayAllDroids[2].indexOf(value)]
}


splitUpDroids(4)


// =======================================


const leadDroids = []
const tailDroids = []

function findLeadAndTail(array) {
  for (let i = 0; i < arrayAllDroids.length; i++) {
    leadDroids.push(findLead(array[i]))
    tailDroids.push(findTail(array[i]))
  }
}

findLeadAndTail(arrayAllDroids)

// =======================================

function addDroids(array) {
  array.forEach((droid) => {
    if (!cells[droid].classList.contains('hit')) {
      cells[droid].classList.add('bDroid')
    }
  })
}

// =======================================























function droidHit() {
  for (let i = 0; i < cells.length; i++) {
    sumDroids()
    if (cells[i].classList.contains('hit') === true && cells[i].classList.contains('laser') === true) {
      return
    } else if (cells[i].classList.contains('stormtrooper') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitTroopers[0].push(i)
        delete arrayAllTroopers[0].splice([arrayAllTroopers[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitTroopers[1].push(i)
        delete arrayAllTroopers[1].splice([arrayAllTroopers[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitTroopers[2].push(i)
        delete arrayAllTroopers[2].splice([arrayAllTroopers[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitTroopers[3].push(i)
        delete arrayAllTroopers[3].splice([arrayAllTroopers[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitTroopers[4].push(i)
        delete arrayAllTroopers[4].splice([arrayAllTroopers[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('stormtrooper')
      cells[i].classList.add('hitstormtrooper')
      removeLaser()
      laser = mFalcon
    } else if (cells[i].classList.contains('hitstormtrooper') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
        delete arrayAllDroids[0].splice([arrayAllDroids[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
        delete arrayAllDroids[1].splice([arrayAllDroids[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitDroids[2].push(i)
        delete arrayAllDroids[2].splice([arrayAllDroids[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitDroids[3].push(i)
        delete arrayAllDroids[3].splice([arrayAllDroids[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitDroids[4].push(i)
        delete arrayAllDroids[4].splice([arrayAllDroids[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      score += 200
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
    } else if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
        delete arrayAllDroids[0].splice([arrayAllDroids[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
        delete arrayAllDroids[1].splice([arrayAllDroids[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitDroids[2].push(i)
        delete arrayAllDroids[2].splice([arrayAllDroids[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitDroids[3].push(i)
        delete arrayAllDroids[3].splice([arrayAllDroids[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitDroids[4].push(i)
        delete arrayAllDroids[4].splice([arrayAllDroids[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      score += 100
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
    }
    if (sum === 0) {
      gameWon()
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    }
  }
}



//  =========================
//  =========================






function droidHit() {
  for (let i = 0; i < cells.length; i++) {
    sumDroids()
    if (cells[i].classList.contains('hit') === true && cells[i].classList.contains('laser') === true) {
      return
    } else if (cells[i].classList.contains('stormtrooper') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitTroopers[0].push(i)
        delete arrayAllTroopers[0].splice([arrayAllTroopers[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitTroopers[1].push(i)
        delete arrayAllTroopers[1].splice([arrayAllTroopers[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitTroopers[2].push(i)
        delete arrayAllTroopers[2].splice([arrayAllTroopers[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitTroopers[3].push(i)
        delete arrayAllTroopers[3].splice([arrayAllTroopers[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitTroopers[4].push(i)
        delete arrayAllTroopers[4].splice([arrayAllTroopers[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('stormtrooper')
      cells[i].classList.add('hitstormtrooper')
      removeLaser()
      laser = mFalcon
    } else if (cells[i].classList.contains('hitstormtrooper') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
        delete arrayHitTroopers[0].splice([arrayHitTroopers[0].indexOf(i)], 1)
        delete arrayAllDroids[0].splice([arrayAllDroids[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
        delete arrayHitTroopers[1].splice([arrayHitTroopers[1].indexOf(i)], 1)
        delete arrayAllDroids[1].splice([arrayAllDroids[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitTroopers[2].push(i)
        delete arrayHitTroopers[2].splice([arrayHitTroopers[2].indexOf(i)], 1)
        delete arrayAllDroids[2].splice([arrayAllDroids[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitTroopers[3].push(i)
        delete arrayHitTroopers[3].splice([arrayHitTroopers[3].indexOf(i)], 1)
        delete arrayAllDroids[3].splice([arrayAllDroids[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitTroopers[4].push(i)
        delete arrayHitTroopers[4].splice([arrayHitTroopers[4].indexOf(i)], 1)
        delete arrayAllDroids[4].splice([arrayAllDroids[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('hitstormtrooper')
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      score += 200
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
    } else if (cells[i].classList.contains('bDroid') === true && cells[i].classList.contains('laser') === true) {
      if (i >= arrayLeadsAndTails[0][0] && i <= arrayLeadsAndTails[0][1]) {
        arrayHitDroids[0].push(i)
        delete arrayAllDroids[0].splice([arrayAllDroids[0].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[1][0] && i <= arrayLeadsAndTails[1][1]) {
        arrayHitDroids[1].push(i)
        delete arrayAllDroids[1].splice([arrayAllDroids[1].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[2][0] && i <= arrayLeadsAndTails[2][1]) {
        arrayHitDroids[2].push(i)
        delete arrayAllDroids[2].splice([arrayAllDroids[2].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[3][0] && i <= arrayLeadsAndTails[3][1]) {
        arrayHitDroids[3].push(i)
        delete arrayAllDroids[3].splice([arrayAllDroids[3].indexOf(i)], 1)
      } else if (i >= arrayLeadsAndTails[4][0] && i <= arrayLeadsAndTails[4][1]) {
        arrayHitDroids[4].push(i)
        delete arrayAllDroids[4].splice([arrayAllDroids[4].indexOf(i)], 1)
      }
      cells[i].classList.remove('bDroid')
      cells[i].classList.add('hit')
      score += 100
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
    }
    if (sum === 0) {
      gameWon()
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    }
  }
}


// ==================================================


function droidDarth() {
  for (let i = 0; i < cells.length; i++) {

    if (cells[i].classList.contains('hit') === true && cells[i].classList.contains('laser') === true) {
      return
    } else if (cells[i].classList.contains('darth1') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('darth1')
      cells[i].classList.add('hitdarth1')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('darth2') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('darth2')
      cells[i].classList.add('hitdarth2')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('darth3') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('darth3')
      cells[i].classList.add('hitdarth3')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('darth4') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('darth4')
      cells[i].classList.add('hitdarth4')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('hitdarth1') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('hitdarth1')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('hitdarth2') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('hitdarth2')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('hitdarth3') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('hitdarth3')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
    } else if (cells[i].classList.contains('hitdarth4') === true && cells[i].classList.contains('laser') === true) {
      cells[i].classList.remove('hitdarth4')
      score += 250
      scoretally.innerHTML = score
      removeLaser(i)
      laser = mFalcon
      darthLives -= 1
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









