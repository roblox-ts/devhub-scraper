**LoadAnimation** will load the given [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto an [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator), returning a playable [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack). When called on Animators within models that the client has network ownership of, ie. the local player's character or from [BasePart:SetNetworkOwner](https://developer.roblox.com/en-us/api-reference/function/BasePart/SetNetworkOwner), this function also loads the animation for the server as well.

You should use this function directly instead of the similarly-named [Humanoid:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/Humanoid/LoadAnimation) and [AnimationController:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/AnimationController/LoadAnimation) functions. These are deprecated proxies of this function which also create an [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) if one does not exist; this can cause replication issues if you are not careful. For more information, see this [announcement post](https://devforum.roblox.com/t/deprecating-loadanimation-on-humanoid-and-animationcontroller/857129)

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