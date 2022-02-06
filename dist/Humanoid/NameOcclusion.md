Controls whether a [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) name can be seen behind walls or other objects.

This property is a [NameOcclusion](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion) value and can be configured to occlude all names, enemies names only or disable occlusion entirely.

How does NameOcclusion work?
----------------------------

This property applies based on the viewing [Player's](https://developer.roblox.com/en-us/api-reference/class/Player) [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid). If the viewing [Player's](https://developer.roblox.com/en-us/api-reference/class/Player) [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) NameOcclusion property is set to OccludeAll, all [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) name tags will be occluded for that [Player](https://developer.roblox.com/en-us/api-reference/class/Player).

NameOcclusion when there is no local Humanoid
---------------------------------------------

In cases where the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) has no [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) associated with it. This property will instead apply for the subject [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid). This means in such cases, a [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) [Humanoid.NameOcclusion](https://developer.roblox.com/en-us/api-reference/property/Humanoid/NameOcclusion) property determines the occlusion of that [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) name for the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer).