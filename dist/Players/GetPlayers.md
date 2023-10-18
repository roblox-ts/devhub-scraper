This method returns a table of all presently connected [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player). It
functions the same way [`Instance:GetChildren()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetChildren) would except that it
only returns Player objects. It functions similarly to
[`Instance:GetChildren()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetChildren) when called on [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players). When used
in conjunction with a for-loop, it is useful for iterating over all
players in a game.
```lua
Players = game:GetService("Players")
for i, player in pairs(Players:GetPlayers()) do
    print(player.Name)
end
```

Scripts that connect to [`Players.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded) are often trying to
process every Player that connects to the game. This method is useful for
iterating over already-connected players that wouldn't fire
[`PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded). Using this method ensures that no
player is missed!
```lua
local Players = game:GetService("Players")

local function onPlayerAdded(player)
	print("Player: " .. player.Name)
end

for _, player in pairs(Players:GetPlayers()) do
	onPlayerAdded(player)
end
Players.PlayerAdded:Connect(onPlayerAdded)
```