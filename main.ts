input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(67)
        basic.showNumber(6)
        basic.showNumber(7)
        basic.showNumber(67)
        music.setTempo(500)
    }
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString("12345678")
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # # # # #
        # . . . #
        # # . # #
        # # # # #
        `)
    basic.showNumber(0)
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        # . # . #
        # # . # #
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Chessboard)
    led.plotBarGraph(
    0,
    5,
    true
    )
    basic.pause(500)
    basic.pause(100)
    basic.showString("theodoris")
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        . . # . .
        . # . . #
        . . # . .
        . . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . # .
        # # # # #
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # #
        # . . . #
        # # . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . # #
        # # # # .
        # . # # #
        # # # . #
        # # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # # #
        . . . . .
        . . . . .
        `)
    game.createSprite(2, 2).move(1)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
music.play(music.stringPlayable("G B A G C5 B A B ", 151), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
