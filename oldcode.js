
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
