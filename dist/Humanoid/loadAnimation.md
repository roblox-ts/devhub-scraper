This function loads an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid), returning an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that can be used for playback.

The following code can be used to load an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) onto a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid).

```lua
local animationTrack = humanoid:LoadAnimation(animation)
animationTrack:Play()
``` 

Should I load an Animation on the client or server?
---------------------------------------------------

If the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is controlled by a particular client, as is the case with [Player](https://developer.roblox.com/en-us/api-reference/class/Player) [Characters](https://developer.roblox.com/en-us/api-reference/property/Player/Character) then [Animations](https://developer.roblox.com/en-us/api-reference/class/Animation) should be loaded and played from that client.

If the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) belongs to a NPC (Non Player Character) which the server has [network ownership](http://robloxdev.com/articles/Network-Ownership) of then the [Animations](https://developer.roblox.com/en-us/api-reference/class/Animation) should be loaded and played from the server.

Although generally it is not advisable to do so, these rules can be bypassed using the [Animator](https://developer.roblox.com/en-us/api-reference/class/Animator) object.