The CharacterAutoLoads [Players](https://create.roblox.com/docs/reference/engine/classes/Players) property indicates whether `Character`s
will respawn automatically. The default value is _true_.

If this property is disabled (_false_), players `Characters` will not
spawn until the [Player:LoadCharacter](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) function is called for each
[Player](https://create.roblox.com/docs/reference/engine/classes/Player) - including when players join the game.

This can be useful in games where players have finite lives, such as
competitive games in which players do not respawn until a game round ends.