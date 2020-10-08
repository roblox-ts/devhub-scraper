This function loads an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController), returning an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that can be used for playback.

How to load an Animation
------------------------

The following code can be used to load an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController).

```Lua
local animationTrack = animationController:LoadAnimation(animation)
animationTrack:Play()
``` 

Should I load an Animation on the client or server?
---------------------------------------------------

In order for [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack)s to replicate correctly, it's important to know when they should be loaded on the client (via a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)) or on the server (via a [Script](https://developer.roblox.com/en-us/api-reference/class/Script)). If an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController) is created on the server, its animations should be loaded and played on the server unless a player has been assigned network ownership of the [Model](https://developer.roblox.com/en-us/api-reference/class/Model)'s root part using [BasePart:SetNetworkOwner](https://developer.roblox.com/en-us/api-reference/function/BasePart/SetNetworkOwner). If an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController) is created on the client it should be animated by the client.

Although it is not recommended, if a developer wishes to play animations on a locally controlled [Model](https://developer.roblox.com/en-us/api-reference/class/Model) from the server they can use the [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) object.

Note this differs slightly for animations playing on Player characters, for more information on this please see [Humanoid:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/Humanoid/LoadAnimation).