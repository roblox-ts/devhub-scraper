The **CharacterAutoLoads** property indicates whether
[`Characters`](https://create.roblox.com/docs/reference/engine/classes/Character) will respawn automatically. The default value
is true.

If this property is disabled (false), player [`Characters`](https://create.roblox.com/docs/reference/engine/classes/Character)
will not spawn until the [`Player:LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) function is called
for each [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player), including when players join the experience.

This can be useful in experiences where players have finite lives, such as
competitive games in which players do not respawn until a game round ends.