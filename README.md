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

This was probably one of the more time consuming tasks as I wanted the enemies to move in opposite directions depending on the rows they were on. In order to get this to work I came up with a system whereby there is a lead square and a tail square and as these move the enemies then follow them. At the end of each line the lead becomes the tail on the next line and vise versa. I then applied some logic to check if either the lead square or the tail square was equal to the start or the end of the line in question and then applied the required functions. 


### Lasers

In order to be able to have multiple lasers I put an event listener linked to the space bar in that adds a laser to the cell directly above the Millenium Falcon wherever it is on the board. I then wrote an interval function to check every 200ms if there are any lasers on the board and to move them accordingly.


### Enemy Lasers

The enemy lasers were exactly the same concept as the lasers, with 2 fundadmental differences. First of all they obviously needed to move down the grid and not up it; and secondly, they needed to be fired randomly. I also wanted these to move at different speeds depending on which level the user was playing. 

```
  interval3 = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (arrayAllDroids.flat(Infinity).length))
    addELaser(arrayAllDroids.flat(Infinity)[randomIndex])
  }, 1000)


  interval4 = setInterval(() => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('elaser') === true) {
        removeELaser(i)
        addELaser(i + width)
        mFalconHit()
        return
      }
    }
  }, 100)
```


### Scaling

The main issue with scaling was finding the begging and end of each row without having to hard code them. The formula (see above in spreadsheet) was easy enough to find - this allowed me to enter the number of columns required and get the begging and end of each row, however I couldnt find a way to replicate the formula n times - so I ended up having to hard code that part:

```
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
```

### Collisions


  
## Screenshots
![screnshot](Screenshots/GP_Home.png)
![screnshot_2](Screenshots/GP_Level_2.png)
![screnshot_3](Screenshots/GP_Level_3.png)
![screnshot_4](Screenshots/GP_Level_4.1.png)
![screnshot_5](Screenshots/GP_Level_4.2.png)
![screnshot_6](Screenshots/GP_Boss.png)
![screnshot_7](Screenshots/GP_Rules.png)
![screnshot_8](Screenshots/GP_Leaderboard.png)

## Challenges / Victories

### Local sotrage for scores carried to different levels


### Harder / decaying enemies

This was a feature that I really liked the idea of an probably spent too much time implementing. In order to get the 'clones' to decay I once hit for the first time, I created 2 classes for this type of enemy, one for pre-hit and the other for post-hit. And after a bit of **Paintbrush** on the original image, I had a new image to replace the old once the new class came into place. 


### Getting boss too move together 

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

* I have found on occasion that when too many lasers are fired from the M-Flacon that some of them pass through the 'enemies' - this doesnt seem to happen on every level and usually happens when there are fewer 'enemies' left on the grid.

* Although not one I have managed to replicate - a friend advised me that he managed to get the 'Darth Lives' on the final level to as low as '-66'. There was obviously something very wrong there, but as I say I have not managed to recreate this issue.


## Potential future features

Asside from fixing the bugs...


### Increased Speed

* I would have liked to have implemented code that would allow the enemies to speed up depending either on how many were left in that particular row or on how far down the grid they were.

### Mobile Responsiveness 

* I decided to spend more time developing the game rather than trying to implement mobile responsiveness. It would be a nice feature to have though and one my 'test subjects' highlighted stongly.

### Darth decaying like the 'clones'

* I think this would have been very achievable with a little more time, and probably should have tried to achieve this at the expense of one of the levels, however I got a little caught up trying to achieve a 'full game' user experience and simply ran out of time. 

## Images