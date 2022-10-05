gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    MC.change(LedSpriteProperty.X, -1)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    MC.change(LedSpriteProperty.Y, 1)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    MC.change(LedSpriteProperty.X, 1)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    MC.change(LedSpriteProperty.Y, -1)
})
let MC: game.LedSprite = null
MC = game.createSprite(2, 2)
MC.set(LedSpriteProperty.Blink, 500)
basic.forever(function () {
	
})
