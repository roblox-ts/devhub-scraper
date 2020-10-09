Returns an array of all [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that are currently being played by the [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController).

A typical use for this function is stopping currently playing tracks using [AnimationTrack:Stop](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/Stop).

Note this function will not return [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) that have loaded but are not playing. If the developer wishes to track these they will need to index them manually. See below for one example of how this could be achieved:

```lua
local animationTracks = {}
local track = animationController:LoadTrack(animation)
table.insert(animationTracks, track)
```