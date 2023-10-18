Returns the time position of the first [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) of the given name
in an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). If multiple [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)s share the same
name, it will return the earliest one in the animation.

This function will return an error if it is uses with an invalid keyframe
name (one that does not exist for example) or if the underlying
[`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) has not yet loaded. To address this make sure only
correct keyframe names are used and the animation has loaded before
calling this function.

To check if the animation has loaded, verify that the
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)'s [`AnimationTrack.Length`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Length) is greater than
zero.