radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnleft()
    } else if (receivedNumber == 2) {
        cuteBot.turnright()
    } else if (receivedNumber == 3) {
        cuteBot.backforward()
    } else if (receivedNumber == 4) {
        cuteBot.forward()
    } else if (receivedNumber == 5) {
        cuteBot.stopcar()
    }
})
radio.setGroup(0)
basic.forever(function () {
	
})
