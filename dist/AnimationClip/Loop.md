Determines whether the animation stored in this [`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) is
intended to loop. When set to true, the animation will continuously repeat
each time it finishes.

Note that [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) instances internally load an
[`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) when an [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) is requested via its
[`AnimationId`](https://create.roblox.com/docs/reference/engine/classes/Animation#AnimationId), and the
[`AnimationTrack.Looped`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Looped) property will default to the original
[`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) value. Note also that this value can be overwritten.