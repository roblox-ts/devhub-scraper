This function returns the _customLoadingScreen_ the [LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) arrived into the place with.

Note, the _customLoadingScreen_ will not be used if the destination place is in a different game.

Loading screen
--------------

During a teleport, whilst the destination place is loading, the _customLoadingScreen_ is parented to the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui). Once the place has loaded the [loading screen](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) is [parented](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to _nil_.

If you wish to preserve the _customLoadingScreen_ and perform your own transitions, you will need to parent it to the [LocalPlayer's](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui). For an example of this, see the code sample below.

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.