Currently this function only returns the correct value on the client

This function returns whether gear of the given [`Enum.GearType`](https://create.roblox.com/docs/reference/engine/enums/GearType) is
permitted to be added to [`Players'`](https://create.roblox.com/docs/reference/engine/classes/Player)
[`StarterGears`](https://create.roblox.com/docs/reference/engine/classes/StarterGear). For example:
```lua
local meleeWeaponsAllowed = game:IsGearTypeAllowed(Enum.GearType.MeleeWeapons)
```

Whether gear of a specific [`Enum.GearType`](https://create.roblox.com/docs/reference/engine/enums/GearType) is permitted in the game is
determined in a place's settings page under 'Permissions'. Note, all of a
gear's associated [`GearTypes`](https://create.roblox.com/docs/reference/engine/enums/GearType) must be enabled for it to be
permitted in a place.