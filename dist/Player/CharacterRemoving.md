The CharacterRemoving event fires right before a player's character is
removed, such as when the player is respawning.

This event can be used alongside the [`Player.CharacterAdded`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAdded) event,
which fires when a player's character spawns or respawns. For instance, if
you would like to print a message every time a player spawns and dies:
```lua
local Players = game:GetService("Players")

local function onCharacterSpawned(player)
	print(player.Name .. " is spawning")
end

local function onCharacterDespawned(player)
	print(player.Name .. " is despawning")
end

local function onPlayerAdded(player)
	player.CharacterAdded:Connect(function ()
		onCharacterDespawned(player)
	end)
	player.CharacterRemoving:Connect(function ()
		onCharacterDespawned(player)
	end)
end

Players.PlayerAdded:Connect(onPlayerAdded)
```

This event is only concerned with the [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)
of a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player). If you instead need to track when a player
joins/leaves the game, use the events [`Players.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded) and
[`Players.PlayerRemoving`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerRemoving).