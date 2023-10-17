Determines which clip takes priority when multiple animations are playing
simultaneously. Multiple playing animations look to this property to
figure out which [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) poses should be played over one another.

Note that [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) instances internally load an
[`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) when an [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) is requested via its
[`AnimationId`](https://create.roblox.com/docs/reference/engine/classes/Animation#AnimationId), and the
[`AnimationTrack.Priority`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Priority) property will default to the original
[`AnimationClip`](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) value. Note also that this value can be overwritten.