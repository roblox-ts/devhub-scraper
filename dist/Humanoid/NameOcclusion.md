Controls whether a [Humanoid's](https://create.roblox.com/docs/reference/engine/classes/Humanoid) name and health bar can be seen
behind walls or other objects.

This property is a [NameOcclusion](https://developer.roblox.com/en-us/api-reference/enum/NameOcclusion) value and can be configured to
occlude all names, enemies names only or disable occlusion entirely.

#### How does NameOcclusion work?

This property applies based on the viewing [Player's](https://create.roblox.com/docs/reference/engine/classes/Player) [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid).
If the viewing [Player's](https://create.roblox.com/docs/reference/engine/classes/Player) [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) NameOcclusion property is set
to OccludeAll, all [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) name tags will be occluded for that
[Player](https://create.roblox.com/docs/reference/engine/classes/Player).

#### NameOcclusion when there is no local Humanoid

In cases where the [Players.LocalPlayer](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) has no [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) associated with
it. This property will instead apply for the subject [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid). This
means in such cases, a [Humanoid's](https://create.roblox.com/docs/reference/engine/classes/Humanoid) [Humanoid.NameOcclusion](https://create.roblox.com/docs/reference/engine/classes/Humanoid#NameOcclusion)
property determines the occlusion of that [Humanoid's](https://create.roblox.com/docs/reference/engine/classes/Humanoid) name for
the [Players.LocalPlayer](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer).