## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) General Assembly, Software Engineering Immersive

#Project #1: Star Invaders


## Overview

This was the first project we were assigned on the course and the aim of it was to create a playable game of our choice from a list (Battleships / Candy Crush / Frogger / Minesweeper / Pacman / Reversi / Snake / Space Invaders / Tetris / Ultimate Tic-Tac-Toe) and reder it playable in a browser using DOM-manipulation. This was a solo project and we had 5 days to implement it. I chose to do Space Invaders as I thought it would allow more creative freedom and present more avenues on which to expand. 
You can find the project here.


## Technologies

* Javascript
* HTML
* CSS
* Git & GitHub
* Google Docs
* Google Fonts
* Paintbrush


## Brief

### Requirements

* Use a mix of HTML/CSS & Javascript to render a game in the browser
* Use logic and DOM manipulation to control the game flow
* Use semantic markup for HTML and CSS
* Deploy the game online
* The player should be able to clear at least one wave of aliens 
* The player's score should be displayed at the end of the game

### Suggested Enhancements

* Responsive design
* Each wave gets more difficult
* Persistant leaderboard using localStorage


## Approach

The two main off-spec features I wanted to incoorporate were to have the 'aliens' moving in opposite directions and not just moving as a block, and to have a multilevel game, potentially with a boss at the end. 

### Wireframes

I used a few different techonoligies in order to plan and wireframe my project - largely depending on whether I was by my computer or not and if I needed to run any calculations:

![wireframe](Screenshots/WF_1.png)
![wireframe_2](Screenshots/WF_2.png)
![wireframe_3](Screenshots/WF_GoogleDoc.png)
![wireframe_4](Screenshots/WF_Row_Calc.png)


### Grid

```
const grid = document.querySelector('.grid')

const cells = []

const width = 9

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  cells.push(div)
}
```

### Millennium Falcon

```
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
```

### Enemy movement
### Lasers
### Enemy Lasers
### Scalling
### Collisions
### Boss
  
  
## Screenshots
![screnshot](Screenshots/GP_Home.png)
![screnshot_2](Screenshots/GP_Level_2.png)
![screnshot_3](Screenshots/GP_.png)
![screnshot_4](Screenshots/GP_.png)
![screnshot_5](Screenshots/GP_.png)
![screnshot_6](Screenshots/GP_.png)
![screnshot_7](Screenshots/GP_.png)
![screnshot_8](Screenshots/GP_.png)

## Challenges / Victories

### Local sotrage for scores carried to different levels
### Getting boss too move together 
### Harder enemies
### Lasers

```
// * === Find/Add/Remove Lead ===

function findLead(array) {
  return Math.max.apply(Math, array)
}

function addLead(index) {
  cells[index].classList.add('lead')
}

function removeLead(index) {
  cells[index].classList.remove('lead')
}


// * === Find/Add/Remove Tail ===

function findTail(array) {
  return Math.min.apply(Math, array)
}

function addTail(index) {
  cells[index].classList.add('tail')
}

function removeTail(index) {
  cells[index].classList.remove('tail')
}


// * === Move Lead & Tail ===

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
```

Moving Darth Vadar randomly but keeping the 4 together and not allowing any of the 'squares' to go over the edge of the grid.

```
// * === Add/Remove Darth ===

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
```

## Known bugs

I have found on occasion that when too many lasers are fired from the M-Flacon that some of them pass through the 'enemies' - this doesnt seem to happen on every level and usually happens when there are fewer 'enemies' left on the grid.

## Potential future features

Asside from fixing the bugs...


### Increased Speed

* I would have liked to have implemented code that would allow the enemies to speed up depending either on how many were left in that particular row or on how far down the grid they were.

### Mobile Responsiveness 

* I decided to spend more time developing the game rather than trying to implement mobile responsiveness. It would be a nice feature to have though and one my 'test subjects' highlighted stongly.

### Darth decaying like the 'clones'

* I think this would have been very achievable with a little more time, and probably should have tried to achieve this at the expense of one of the levels, however I got a little caught up trying to achieve a 'full game' user experience and simply ran out of time. 

## Images