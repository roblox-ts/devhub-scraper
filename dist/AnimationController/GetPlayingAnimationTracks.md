Returns an array of all [`AnimationTracks`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) that are
currently being played by the [`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController).

A typical use for this function is stopping currently playing tracks using
[`AnimationTrack:Stop()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Stop).

Note this function will not return [`AnimationTracks`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)
that have loaded but are not playing. If the developer wishes to track
these they will need to index them manually. See below for one example of
how this could be achieved:
```lua
local animationTracks = {}
local track = animationController:LoadTrack(animation)
table.insert(animationTracks, track)
```