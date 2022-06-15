This function lowers the [Humanoid.Health](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Health) of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) by the given _amount_ if it is not protected by a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField)

This function accepts negative values for the _amount_ parameter. This will increase the humanoid's [Humanoid.Health](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Health). However this will only have an effect if no [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) is present.

How do ForceFields protect against TakeDamage
---------------------------------------------

A [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is considered protected by a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) if a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) meets one of the following criteria:

*   The [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) shares the same [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) as the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)
*   The [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) is parented to the [Humanoid.RootPart](https://developer.roblox.com/en-us/api-reference/property/Humanoid/RootPart) of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)
*   The [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) is parented to an ancestor of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) other than the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace)

To do damage to a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) irrespective of any [ForceFields](https://developer.roblox.com/en-us/api-reference/class/ForceField) present, set [Humanoid.Health](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Health) directly.

For more information on how [ForceFields](https://developer.roblox.com/en-us/api-reference/class/ForceField) protect [Humanoids](https://developer.roblox.com/en-us/api-reference/class/Humanoid) see the [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) page