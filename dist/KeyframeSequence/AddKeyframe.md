This function adds a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) to the [`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) by
parenting it to the [`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence). It is functionally identical
to setting the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)'s [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to the
[`KeyframeSequence`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence).

Note, this function will not error when called with an instance other than
a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) as the keyframe parameter and will parent it
successfully.