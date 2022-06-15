An object which allows animations to be loaded and applied to a character or model in place of a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) when a Humanoid is not needed. Creates an [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) and loads animations to update [Motor6Ds](https://developer.roblox.com/en-us/api-reference/class/Motor6D) of said character to react in the way that is described within the animation asset referenced by an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) object.

Should I load an Animation on the client or server?
---------------------------------------------------

In order for [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) to replicate correctly, it's important to know when they should be loaded on the client (via a[LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)) or on the server (via a [Script](https://developer.roblox.com/en-us/api-reference/class/Script)).

If an Animator is a descendant of a Humanoid or AnimationController in a Player's [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) then animations started on that Player's client will be replicated to the server and other clients.

If the Animator is not a descendant of a player character, its animations must be loaded and started on the server to replicate.

The Animator object must be initially created on the server and replicated to clients for animation replication to work at all. If an Animator is created locally, then AnimationTracks loaded with that Animator will not replicate.

Both [Humanoid:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/Humanoid/LoadAnimation) and [AnimationController:LoadAnimation](https://developer.roblox.com/en-us/api-reference/function/AnimationController/LoadAnimation) will create an Animator if one does not already exist. When calling LoadAnimation from LocalScripts you need to be careful to wait for the Animator to replicate from the server before calling LoadAnimation if you want character animations to replicate. You can do this with WaitForChild(“Animator”).

See also
--------

*   [Using the Animation Editor](https://developer.roblox.com/articles/using-animation-editor), explore this powerful built-in plugin for creating custom animations
*   [Using Animations in Games](https://developer.roblox.com/articles/using-animations-in-games), learn how to add pre-built and custom animations to your game