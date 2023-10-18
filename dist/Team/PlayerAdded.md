Fires whenever a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) is assigned to the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team). A player
is considered assigned if their [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team) property is equal to
the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) and [`Player.Neutral`](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) is false.

This event is team specific and will only fire when a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
joints the specific [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team). Any function connected to this event
will be passed the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) object of the player who joined the
team. For example:
```lua
Team.PlayerAdded:Connect(function(player)
	print(player.Name.." has joined the team")
end)
```