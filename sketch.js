function setup() {

    // colour options: blue, white, black, dark green, bright orange, soft pink, khaki, neon green, green
    const colours = ["#82a3b4", "#e8e8e8", "#363638", "#f8a47b", "#f1b8a9", "#98b36c", "#899450"]

    const cellNumber = 32
    const cellSize = 25
    const canvasSize = 800

    createCanvas(canvasSize, canvasSize)

    background(225)

    for (let row = 0; row < cellNumber; row++) {
        for (let column = 0; column < cellNumber; column++) {
            noStroke()
            fill(random(colours))
            const xPosition = row * cellSize
            const yPosition = column * cellSize
            square(xPosition, yPosition, cellSize)
        }
    }
}