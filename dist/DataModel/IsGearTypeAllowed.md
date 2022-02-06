Currently this function only returns the correct value on the client

This function returns whether gear of the given [GeareType](https://developer.roblox.com/en-us/api-reference/enum/GeareType) is permitted to be added to [Players'](https://developer.roblox.com/en-us/api-reference/class/Player) [StarterGears](https://developer.roblox.com/en-us/api-reference/class/StarterGear). For example:

local meleeWeaponsAllowed = game:IsGearTypeAllowed(Enum.GearType.MeleeWeapons)

Whether gear of a specific [GearType](https://developer.roblox.com/en-us/api-reference/enum/GearType) is permitted in the game is determined in a place's settings page under 'Permissions'. Note, all of a gear's associated [GearTypes](https://developer.roblox.com/en-us/api-reference/enum/GearType) must be enabled for it to be permitted in a place.