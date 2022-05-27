The FollowUserId is a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) property that contains the [Player.UserId](https://create.roblox.com/docs/reference/engine/classes/Player#UserId)
of the user that a player followed into the game. If the player did not
follow anyone into the game, this property will be 0. This property is
useful for alerting players who have been followed by another player into
the game.

You can get the name of the player followed using this user ID and the
[Players:GetNameFromUserIdAsync](https://create.roblox.com/docs/reference/engine/classes/Players#GetNameFromUserIdAsync) function.