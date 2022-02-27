The LoadCharacter [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function creates a new character for the player, removing the old one. It also clears the player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) and [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui).

This is useful in cases where you want to reload the character without killing the player, such as when you want to load a new character appearance after changing the player's [Player.CharacterAppearance](https://developer.roblox.com/en-us/api-reference/property/Player/CharacterAppearance).

Notes
-----

The function is similar to [Player:LoadCharacterBlocking](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacterBlocking), but the request is processed asynchronously instead of synchronously. This means other tasks will be able to continue while the character is being loaded, including the rendering of the game and any other tasks. Also, this function can be used in script, while LoadCharacterBlocking cannot.

After calling LoadCharacter for an individual player, it is not recommended to call it again for the same player until after that player's [Player.CharacterAppearanceLoaded](https://developer.roblox.com/en-us/api-reference/event/Player/CharacterAppearanceLoaded) event has fired.

Character Loading Event order
-----------------------------

Calling the `Player:LoadCharacter()` with an R15 Avatar fires events in the following order (Note: R6 ordering is different):

1.  Player.Character sets
2.  Player.CharacterAdded fires
3.  Player.Changed fires with a value of “Character”
4.  Character appearance initializes
5.  Player.CharacterAppearanceLoaded fires
6.  Character.Parent sets to the DataModel
7.  The Character rig builds, and the Character scales
8.  Character moves to the spawn location
9.  LoadCharacter returns