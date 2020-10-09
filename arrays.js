


const grid = document.querySelector('.grid')

const cells = []

const width = 9

let mFalcon = 76

const gridStarts = [0] // * Starting at 0 in order to be able to call the right number based on the row number
const gridEnds = [0] // * Starting at 0 in order to be able to call the right number based on the row number

let bDroids = [0, 1, 2, 3, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]



const droidsRow_1 = []
const droidsRow_2 = []
const droidsRow_3 = []
const droidsRow_4 = []
const droidsRow_5 = []
const droidsRow_6 = []
const droidsRow_7 = []
const droidsRow_8 = []
const droidsRow_9 = []


const minDroidR1 = findMin(droidsRow_1)
const minDroidR2 = findMin(droidsRow_2)
const minDroidR3 = findMin(droidsRow_3)
const minDroidR4 = findMin(droidsRow_4)
const minDroidR5 = findMin(droidsRow_5)
const minDroidR6 = findMin(droidsRow_6)
const minDroidR7 = findMin(droidsRow_7)
const minDroidR8 = findMin(droidsRow_8)
const minDroidR9 = findMin(droidsRow_9)

const maxDroidR1 = findMax(droidsRow_1)
const maxDroidR2 = findMax(droidsRow_2)
const maxDroidR3 = findMax(droidsRow_3)
const maxDroidR4 = findMax(droidsRow_4)
const maxDroidR5 = findMax(droidsRow_5)
const maxDroidR6 = findMax(droidsRow_6)
const maxDroidR7 = findMax(droidsRow_7)
const maxDroidR8 = findMax(droidsRow_8)
const maxDroidR9 = findMax(droidsRow_9)

const minDroidArray = minDroids()

let maxDroidArray = maxDroids()

