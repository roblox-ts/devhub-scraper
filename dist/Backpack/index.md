A container object that holds a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)'s inventory. Any [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)
in a player's Backpack will be displayed in their inventory at the bottom of
their screen. Selecting [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)s from the inventory will equip the
[`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool), moving it from the Backpack to the player's character.

The Backpack can also store [`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) and
[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), which run when placed in a player's
Backpack.

When a player's character spawns, the contents of the [`StarterPack`](https://create.roblox.com/docs/reference/engine/classes/StarterPack) and
their [`StarterGear`](https://create.roblox.com/docs/reference/engine/classes/StarterGear) are copied into their Backpack. Once a character
dies, the Backpack is removed and a new one will be created -- populating it
with the contents of [`StarterPack`](https://create.roblox.com/docs/reference/engine/classes/StarterPack) and [`StarterGear`](https://create.roblox.com/docs/reference/engine/classes/StarterGear).

Roblox provides an interface for a player to access their backpack and
inventory by default at the bottom of the screen. If a developer wishes to
disable the default Roblox backpack GUI and replace it with their own, they
may do so using [`StarterGui:SetCoreGuiEnabled()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled).

The Backpack can be accessed from both the client and the server.
```lua
-- Accessing Backpack from a Server Script:
game.Players.PlayerName.Backpack

-- Accessing Backpack from a LocalScript:
game.Players.LocalPlayer.Backpack
```