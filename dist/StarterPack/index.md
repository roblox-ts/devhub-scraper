A service-level container whose contents are copied into each [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s
[Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) when the player spawns. It is generally used to hold `Tools`, but
is sometimes used to hold [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s to ensure that each player gets a
copy.

When a player's character spawns, the contents of the StarterPack and their
[StarterGear](https://create.roblox.com/docs/reference/engine/classes/StarterGear) are copied into their [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack). Once a character dies, the
[Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) is removed and a new one is created -- populating it using the
contents of [StarterPack](https://create.roblox.com/docs/reference/engine/classes/StarterPack) and [StarterGear](https://create.roblox.com/docs/reference/engine/classes/StarterGear).

The StarterPack is used to determine a set of [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool)s that _all_ players will
spawn with. If a developer wants to ensure that certain [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool)s are available
to specific players, then they will need to parent the [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool)s directly to the
player's [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) instead.

Note: while normally the contents of [StarterPack](https://create.roblox.com/docs/reference/engine/classes/StarterPack) are predefined, the
contents can be changed while the game is running by adding and removing
[Tool](https://create.roblox.com/docs/reference/engine/classes/Tool)s accordingly. These updates will pass onto a player's backpack when
they respawn and their backpacks are reloaded. Changes to the StarterPack
should be made by the server.

A tool can be added to the StarterPack using the following code.

    Tool.Parent = game:GetService("StarterPack")