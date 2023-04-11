basic.showNumber(input.lightLevel())
basic.pause(2000)
basic.clearScreen()
basic.pause(100)
basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
