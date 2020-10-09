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


// * -------------------------------------------
// * ----------------- bDroids -----------------
// * -------------------------------------------

let bDroids = [0, 1, 2, 3, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]


// * ------------- bDroids in Row --------------

let droidsRow_1 = []
let droidsRow_2 = []
let droidsRow_3 = []
let droidsRow_4 = []
let droidsRow_5 = []
let droidsRow_6 = []
let droidsRow_7 = []
let droidsRow_8 = []
let droidsRow_9 = []


bDroids.forEach((droid) => {
  if (droid >= gridStarts[1] && droid <= gridEnds[1]) {
    droidsRow_1.push(droid)
  } else if (droid >= gridStarts[2] && droid <= gridEnds[2]) {
    droidsRow_2.push(droid)
  } else if (droid >= gridStarts[3] && droid <= gridEnds[3]) {
    droidsRow_3.push(droid)
  } else if (droid >= gridStarts[4] && droid <= gridEnds[4]) {
    droidsRow_4.push(droid)
  } else if (droid >= gridStarts[5] && droid <= gridEnds[5]) {
    droidsRow_5.push(droid)
  } else if (droid >= gridStarts[6] && droid <= gridEnds[6]) {
    droidsRow_6.push(droid)
  } else if (droid >= gridStarts[7] && droid <= gridEnds[7]) {
    droidsRow_7.push(droid)
  } else if (droid >= gridStarts[8] && droid <= gridEnds[8]) {
    droidsRow_8.push(droid)
  } else if (droid >= gridStarts[9] && droid <= gridEnds[9]) {
    droidsRow_9.push(droid)
  }
})

// console.log(droidsRow_1)
// console.log(droidsRow_2)
// console.log(droidsRow_3)
// console.log(droidsRow_4)
// console.log(droidsRow_5)
// console.log(droidsRow_6)
// console.log(droidsRow_7)
// console.log(droidsRow_8)
// console.log(droidsRow_9)



//  * -------- Min & Max Droids in Row ---------


function findMin(array) {
  let min = Math.min.apply(Math, array)
  if (min < width ** 2) {
    return min
  }
}

function findMax(array) {
  let max = Math.max.apply(Math, array)
  if (max > 0) {
    return max
  }
}

let minDroidR1 = findMin(droidsRow_1)
let minDroidR2 = findMin(droidsRow_2)
let minDroidR3 = findMin(droidsRow_3)
let minDroidR4 = findMin(droidsRow_4)
let minDroidR5 = findMin(droidsRow_5)
let minDroidR6 = findMin(droidsRow_6)
let minDroidR7 = findMin(droidsRow_7)
let minDroidR8 = findMin(droidsRow_8)
let minDroidR9 = findMin(droidsRow_9)

let maxDroidR1 = findMax(droidsRow_1)
let maxDroidR2 = findMax(droidsRow_2)
let maxDroidR3 = findMax(droidsRow_3)
let maxDroidR4 = findMax(droidsRow_4)
let maxDroidR5 = findMax(droidsRow_5)
let maxDroidR6 = findMax(droidsRow_6)
let maxDroidR7 = findMax(droidsRow_7)
let maxDroidR8 = findMax(droidsRow_8)
let maxDroidR9 = findMax(droidsRow_9)




function minDroids() {
  let minDroids = []
  minDroids.push(minDroidR1)
  minDroids.push(minDroidR2)
  minDroids.push(minDroidR3)
  minDroids.push(minDroidR4)
  minDroids.push(minDroidR5)
  minDroids.push(minDroidR6)
  minDroids.push(minDroidR7)
  minDroids.push(minDroidR8)
  minDroids.push(minDroidR9)
  minDroids = minDroids.filter((e) => {
    return e !== undefined
  })
  return minDroids
}

let minDroidArray = minDroids()


function maxDroids() {
  let maxDroids = []
  maxDroids.push(maxDroidR1)
  maxDroids.push(maxDroidR2)
  maxDroids.push(maxDroidR3)
  maxDroids.push(maxDroidR4)
  maxDroids.push(maxDroidR5)
  maxDroids.push(maxDroidR6)
  maxDroids.push(maxDroidR7)
  maxDroids.push(maxDroidR8)
  maxDroids.push(maxDroidR9)
  maxDroids = maxDroids.filter((e) => {
    return e !== undefined
  })
  return maxDroids
}

let maxDroidArray = maxDroids()



//  * -------- Adding bDroids ---------

// * ----- Row 1 -----

function addDroidRow_1() {
  droidsRow_1.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })

  cells[minDroidR1].classList.add('min')

  cells[maxDroidR1].classList.add('max')
}

addDroidRow_1()


function removeDroidRow_1() {
  droidsRow_1.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })

  cells[minDroidR1].classList.remove('min')

  cells[maxDroidR1].classList.remove('max')
}

// * ----- Row 2 -----

function addDroidRow_2() {
  droidsRow_2.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })

  cells[minDroidR2].classList.add('min')

  cells[maxDroidR2].classList.add('max')
}

addDroidRow_2()


function removeDroidRow_2() {
  droidsRow_2.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })

  cells[minDroidR2].classList.remove('min')

  cells[maxDroidR2].classList.remove('max')
}

// * ----- Row 3 -----

function addDroidRow_3() {
  droidsRow_3.forEach((droid) => {
    cells[droid].classList.add('bDroid')
  })

  cells[minDroidR3].classList.add('min')

  cells[maxDroidR3].classList.add('max')
}

addDroidRow_3()


function removeDroidRow_3() {
  droidsRow_3.forEach((droid) => {
    cells[droid].classList.remove('bDroid')
  })

  cells[minDroidR3].classList.remove('min')

  cells[maxDroidR3].classList.remove('max')
}



// ! -------------------------------------------
// ! ----------- Below needs work! -------------
// ! -------------------------------------------




// * -------------------------------------------
// * -------------bDroids movement--------------
// * ------------------------------------------- 


// * Right moving rows = 1, 3, 5, 7 (always odd numbers, not matter how many rows)
// * Left moving rows = 2, 4, 6, 8 (always even numbers, not matter how many rows)




function moveDroidsRight() {
  for (let i = 0; i < droidsRow_1.length; i++) {
    if (maxDroidR1 < gridEnds[1]) {
      droidsRow_1[i] += 1
      minDroidR1 = findMin(droidsRow_1)
      maxDroidR1 = findMax(droidsRow_1)
    }
  }
  for (let i = 0; i < droidsRow_3.length; i++) {
    if (maxDroidR3 < gridEnds[3]) {
      droidsRow_3[i] += 1
      minDroidR3 = findMin(droidsRow_3)
      maxDroidR3 = findMax(droidsRow_3)
    }
  }
  for (let i = 0; i < droidsRow_5.length; i++) {
    if (maxDroidR5 < gridEnds[5]) {
      droidsRow_5[i] += 1
      minDroidR5 = findMin(droidsRow_5)
      maxDroidR5 = findMax(droidsRow_5)
    }
  }
  for (let i = 0; i < droidsRow_7.length; i++) {
    if (maxDroidR7 < gridEnds[7]) {
      droidsRow_7[i] += 1
      minDroidR7 = findMin(droidsRow_7)
      maxDroidR7 = findMax(droidsRow_7)
    }
  }
  for (let i = 0; i < minDroidArray.length; i++) {
    if (i % 2 === 0) {
      minDroidArray[i] += 1
    }
  }
  for (let i = 0; i < maxDroidArray.length; i++) {
    if (i % 2 === 0) {
      maxDroidArray[i] += 1
    }
  }
}


function moveDroidsLeft() {
  for (let i = droidsRow_2.length - 1; i >= 0; i--) {
    if (minDroidR2 > gridStarts[2]) {
      droidsRow_2[i] -= 1
      minDroidR2 = findMin(droidsRow_2)
      maxDroidR2 = findMax(droidsRow_2)
    }
  }
  for (let i = 0; i < droidsRow_4.length; i++) {
    if (minDroidR4 > gridStarts[4]) {
      droidsRow_4[i] -= 1
      minDroidR4 = findMin(droidsRow_4)
      maxDroidR4 = findMax(droidsRow_4)
    }
  }
  for (let i = 0; i < droidsRow_6.length; i++) {
    if (minDroidR6 > gridStarts[6]) {
      droidsRow_6[i] -= 1
      minDroidR6 = findMin(droidsRow_6)
      maxDroidR6 = findMax(droidsRow_6)
    }
  }
  for (let i = 0; i < droidsRow_8.length; i++) {
    if (minDroidR8 > gridStarts[8]) {
      droidsRow_8[i] -= 1
      minDroidR8 = findMin(droidsRow_8)
      maxDroidR8 = findMax(droidsRow_8)
    }
  }
  for (let i = 0; i < minDroidArray.length; i++) {
    if (i % 2 !== 0) {
      minDroidArray[i] -= 1
    }
  }
  for (let i = 0; i < maxDroidArray.length; i++) {
    if (i % 2 !== 0) {
      maxDroidArray[i] -= 1
    }
  }
}


function moveDroidsDown() {
  for (let i = 0; i < droidsRow_1.length; i++) {
    droidsRow_1[i] += width
  }

  // for(let i = 0; i < droidsRow_3.length; i++) {
  //   droidsRow_3[i] += width
  // }
  // for(let i = 0; i < droidsRow_1.length; i++) {
  //   droidsRow_3[i] += width
  // }
}





const interval = setInterval(() => {
  if (maxDroidR1 === gridEnds[1]) {


  }
  removeDroidRow_1()
  removeDroidRow_2()
  removeDroidRow_3()

  moveDroidsRight()
  moveDroidsLeft()

  addDroidRow_1()
  addDroidRow_2()
  addDroidRow_3()

}, 1000)



// ! Think about this - would be good to have a function that updates the position of all the droids all the time.

// function findDroids() {
//   bDroids = []
//   document.querySelectorAll('.bDroid')
// }

// console.log(findDroids())

// console.log(document.querySelectorAll('.bDroid'))



















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







// * -------------------------------------------
// * -------------bDroids movement--------------
// * ------------------------------------------- 

// Making arrays manually for time being

// Movement R/L = width - starting bDroids in row.length



// let movement = 0

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