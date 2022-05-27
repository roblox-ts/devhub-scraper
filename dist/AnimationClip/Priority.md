Determines the default priority of the animation stored in this
AnimationClip. Depending on what this is set to, playing multiple
animations at once will look to this property to figure out which
[Keyframe](https://create.roblox.com/docs/reference/engine/classes/Keyframe) `Poses` should be played over one another. [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)
instances internally load an AnimationClip when an [Animation](https://create.roblox.com/docs/reference/engine/classes/Animation) is
requested (by AnimationID), and the [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) `Priority` property
will default to the original [AnimationClip](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) value. Note this value can be
overwritten.