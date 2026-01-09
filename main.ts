radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(0)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(1)
    } else {
        basic.showNumber(2)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(29)
