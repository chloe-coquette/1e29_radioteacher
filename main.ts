radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(29)
if (input.buttonIsPressed(Button.A)) {
    basic.showNumber(0)
} else if (input.buttonIsPressed(Button.B)) {
    basic.showNumber(1)
    music.play(music.stringPlayable("C D E F G A B C5 ", 321), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
} else {
    basic.showNumber(2)
    music.play(music.stringPlayable("C5 B A G F E D C ", 321), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.No)
}
