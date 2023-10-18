This function returns the *customLoadingScreen* the
[`LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) arrived into the place with.

Note, the *customLoadingScreen* will not be used if the destination place
is in a different game.
#### Loading screen

During a teleport, while the destination place is loading, the
*customLoadingScreen* is parented to the [`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui). Once the place
has loaded the [`loading screen`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is
[`parented`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to *nil*.

If you wish to preserve the *customLoadingScreen* and perform your own
transitions, you will need to parent it to the
[`LocalPlayer's`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui). For an
example of this, see the code sample below.
#### Studio limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.