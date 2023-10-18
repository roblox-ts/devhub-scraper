The HasAppearanceLoaded [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function returns whether or not the
appearance of the player's [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) has loaded.

A player's appearance includes items such as the player's [`Shirt`](https://create.roblox.com/docs/reference/engine/classes/Shirt),
[`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants), and [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory).

This is useful when determining whether a player's appearance has loaded
after they first join the game, which can be tracked using the
[`Players.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded) event.