This function removes a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) from the [`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)
by setting its parent to nil. It is functionally identical to setting the
keyframe's parent to nil.

This sets the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)'s parent to nil, but does not destroy it.
This means, provided another reference to the keyframe remains, it can be
re-parented later.

Note, this function will not error when called with an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)
other than a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) as the keyframe parameter.