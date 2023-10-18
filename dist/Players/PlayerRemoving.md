The PlayerRemoving event fires right before a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) leaves the
game. This event fires before [`ChildRemoved`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildRemoved)
does on [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players), and behaves somewhat similarly to
[`Instance.DescendantRemoving`](https://create.roblox.com/docs/reference/engine/classes/Instance#DescendantRemoving). Since it fires before the actual
removal of a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player), this event is useful for storing player data
using a [`GlobalDataStore`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore).

This can be used alongside the [`Player.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Player#PlayerAdded) event, which
fires when a player joins the game. For instance, to print a message every
time a new player joins or leaves the game:
```lua
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
  print(player.Name .. " joined the game!")
end)

Players.PlayerRemoving:Connect(function(player)
  print(player.Name .. " left the game!")
end)
```

If you want to track when a player's character is added or removed from
the game, such as when a player respawns or dies, you can use the
[`Player.CharacterAdded`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAdded) and [`Player.CharacterRemoving`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterRemoving)
functions.