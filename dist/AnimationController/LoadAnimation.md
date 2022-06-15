This function loads an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController), returning an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that can be used for playback.

How to load an Animation
------------------------

The following code can be used to load an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto an [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController).

```lua
local animationTrack = animationController:LoadAnimation(animation)
animationTrack:Play()
``` 

Should I load an Animation on the client or server?
---------------------------------------------------

In order for AnimationTracks to replicate correctly, it's important to know when they should be loaded on the client (via a[LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)) or on the server (via a [Script](https://developer.roblox.com/en-us/api-reference/class/Script)).

If an [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) is a descendant of a Humanoid or AnimationController in a Player's [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) then animations started on that Player's client will be replicated to the server and other clients.

If the Animator is not a descendant of a player character, its animations must be loaded and started on the server to replicate.

The Animator object must be initially created on the server and replicated to clients for animation replication to work at all. If an Animator is created locally, then AnimationTracks loaded with that Animator will not replicate.

Both [Humanoid:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/Humanoid/LoadAnimation) and [AnimationController:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/AnimationController/LoadAnimation) will create an Animator if one does not already exist. When calling LoadAnimation from LocalScripts you need to be careful to wait for the Animator to replicate from the server before calling LoadAnimation if you want character animations to replicate. You can do this with WaitForChild(“Animator”).

See also
--------

*   [Using the Animation Editor](https://developer.roblox.com/articles/using-animation-editor), explore this powerful built-in plugin for creating custom animations
*   [Using Animations in Games](https://developer.roblox.com/articles/using-animations-in-games), learn how to add pre-built and custom animations to your game