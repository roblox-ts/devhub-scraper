The CharacterAutoLoads [Players](https://developer.roblox.com/en-us/api-reference/class/Players) property indicates whether `Character`s will respawn automatically. The default value is _true_.

If this property is disabled (_false_), players `Characters` will not spawn until the [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter) function is called for each [Player](https://developer.roblox.com/en-us/api-reference/class/Player) - including when players join the game.

This can be useful in games where players have finite lives, such as competitive games in which players do not respawn until a game round ends.