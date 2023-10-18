Fires whenever a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) is removed from a [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team). This can
be due to the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) leaving the game, [`Player.Neutral`](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral)
being set to true or the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) joining a different team.

This event is team specific and will only fire when a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
leaves the specific [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team). Any function connected to this event
will be passed the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) object of the player who left the team.
For example:
```lua
Team.PlayerRemoved:Connect(function(player)
	print(player.Name.." has left the team")
end)
```