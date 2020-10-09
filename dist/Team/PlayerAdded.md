Fires whenever a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) is assigned to the [Team](https://developer.roblox.com/en-us/api-reference/class/Team). A player is considered assigned if their [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) property is equal to the [Team](https://developer.roblox.com/en-us/api-reference/class/Team) and [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) is false.

This event is team specific and will only fire when a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joints the specific [Team](https://developer.roblox.com/en-us/api-reference/class/Team). Any function connected to this event will be passed the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object of the player who joined the team. For example:

```Lua
Team.PlayerAdded:Connect(function(player)
    print(player.Name.." has joined the team")
end)
```