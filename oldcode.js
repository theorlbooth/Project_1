
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