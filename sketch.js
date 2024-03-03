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
            const xPosition = column * cellSize
            const yPosition = row * cellSize
            square(xPosition, yPosition, cellSize)
        }
    }
}

