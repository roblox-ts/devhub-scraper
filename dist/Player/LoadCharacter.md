The LoadCharacter [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function creates a new character for the
player, removing the old one. It also clears the player's [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack)
and [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).

This is useful in cases where you want to reload the character without
killing the player, such as when you want to load a new character
appearance after changing the player's [`Player.CharacterAppearance`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAppearance).

Note: The function is similar to [`Player:LoadCharacterBlocking()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacterBlocking),
but the request is processed asynchronously instead of synchronously. This
means other tasks will be able to continue while the character is being
loaded, including the rendering of the game and any other tasks. Also,
this function can be used in a script, while LoadCharacterBlocking cannot.

After calling LoadCharacter for an individual player, it is not
recommended to call it again for the same player until after that player's
[`Player.CharacterAppearanceLoaded`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAppearanceLoaded) event has fired.
#### Character Loading Event order

Calling the [`Player:LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) with an R15 Avatar fires events
in the following order (Note: R6 ordering is different):

2. Player.Character sets
2. Player.CharacterAdded fires
2. Player.Changed fires with a value of "Character"
2. Character appearance initializes
2. Player.CharacterAppearanceLoaded fires
2. Character.Parent sets to the DataModel
2. The Character rig builds, and the Character scales
2. Character moves to the spawn location
2. LoadCharacter returns