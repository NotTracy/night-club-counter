input.onButtonPressed(Button.A, function () {
    costumer += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(costumer)
})
input.onButtonPressed(Button.B, function () {
    costumer += -2
})
input.onGesture(Gesture.Shake, function () {
    costumer = 0
    basic.showNumber(costumer)
})
let costumer = 0
costumer = 0
basic.forever(function () {
	
})
