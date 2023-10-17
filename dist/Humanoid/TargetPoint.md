**Do not use** This property only works with Experimental Mode enabled,
which has been entirely discontinued.

This property describes a 3D position in space where the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
controlling this [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) last clicked with a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)
equipped.

This property is primarily used by classic tools to determine what a
humanoid is targeting when they activate a tool. If you give an NPC a
classic rocket launcher, set their **TargetPoint**, and then call the
tool's [`Tool:Activate()`](https://create.roblox.com/docs/reference/engine/classes/Tool#Activate) function, you can make the NPC fire a
rocket at the target point.