input.onButtonPressed(Button.A, function () {
    letteraA()
    for (let index = 0; index < 2; index++) {
        letteraN()
    }
    letteraA()
})
function letteraA () {
    puntoBreve()
    puntoLungo()
}
function puntoLungo () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(pausaLunga)
    basic.clearScreen()
    basic.pause(pausaLunga)
}
function letteraN () {
    puntoLungo()
    puntoBreve()
}
function puntoBreve () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(pausaBreve)
    basic.clearScreen()
    basic.pause(pausaBreve)
}
let pausaBreve = 0
let pausaLunga = 0
pausaLunga = 500
pausaBreve = 100
basic.forever(function () {
	
})
