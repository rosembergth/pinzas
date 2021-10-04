input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(180)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
basic.showIcon(IconNames.Pitchfork)
