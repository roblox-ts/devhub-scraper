This function returns an array of all [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that are currently being played on the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid).

A typical use for this function is stopping currently playing tracks using [AnimationTrack:Stop](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/Stop).

Beware that this function will not return [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that have loaded but are **not playing**. If you want to track these you will need to index them manually. See below for one example of how this could be achieved:

```Lua
local animationTracks = {}
local track = humanoid:LoadAnimation(animation)
table.insert(animationTracks, track)
```