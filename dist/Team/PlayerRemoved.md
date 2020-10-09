Fires whenever a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) is removed from a [Team](https://developer.roblox.com/en-us/api-reference/class/Team). This can be due to the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) leaving the game, [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) being set to true or the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joining a different team.

This event is team specific and will only fire when a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) leaves the specific [Team](https://developer.roblox.com/en-us/api-reference/class/Team). Any function connected to this event will be passed the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object of the player who left the team. For example:

```lua
Team.PlayerRemoved:Connect(function(player)
	print(player.Name.." has left the team")
end)
```