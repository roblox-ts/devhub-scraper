The MaxActivationDistance property controls the maximum distance, in
studs, between a [Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) and the [ClickDetector](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) for
the character to be able to click it. This is used to limit from how far a
player can interact with a ClickDetector.

For instance, a character within `10` studs of a ClickDetector with a
MaxActivationDistance of `5` would not be able to click the ClickDetector
because they are out of range. If, however, the MaxActivationDistance was
`15`, the character would be able to click it.