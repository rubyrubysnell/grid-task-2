function setup() {

    const colours = ["#82a3b4", "#363638", "#f8a47b", "#f1b8a9", "#98b36c", "#899450"]

    const cellNumber = 32
    const cellSize = 25

    createCanvas(800, 800)

    for (let row = 0; row < cellNumber; row++) {

        // ensure the first two rows is just colours
        if(row > 1) {
            colours.push("#FFFFFF")
        }
        // in the first quarter, increase the probability of a white square
        if (row > 8) {
            colours.push("#FFFFFF", "#FFFFFF")
        }
        // in the last quarter, increase the probability further
        if (row > 24) {
            colours.push("#FFFFFF", "#FFFFFF", "#FFFFFF")
        }
        if (row > 30) {
            colours.push("#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF")
        }

        for (let column = 0; column < cellNumber; column++) {
            noStroke() 
            fill(random(colours))
            const xPosition = row * cellSize
            const yPosition = column * cellSize
            square(xPosition, yPosition, cellSize)
        }
    }
}

// for each row OR column, draw less squares

// cell number needs to exponentially decrease, but with random distribution

// OR add more white squares for each row. for each row, add more white to the array

// setting a variable for the random colour from the array doesn't work because a single random colour is chosen only once
// the random colour is chosen by the variable once, not chosen every time a square is drawn in the for loop

// make there be an INCREASINGLY weighted probability of drawing a white square

// check the row number. if the row number has gone up, make it more likely that the square will be white