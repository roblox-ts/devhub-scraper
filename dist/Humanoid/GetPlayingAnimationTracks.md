This function returns an array of all
[`AnimationTracks`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) that are currently being played on
the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

A typical use for this function is stopping currently playing tracks using
[`AnimationTrack:Stop()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Stop).

Beware that this function will not return
[`AnimationTracks`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) that have loaded but are **not
playing**. If you want to track these you will need to index them
manually. See below for one example of how this could be achieved:
```lua
local animationTracks = {}
local track = humanoid:LoadAnimation(animation)
table.insert(animationTracks, track)
```