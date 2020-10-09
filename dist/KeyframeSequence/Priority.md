Determines the default priority of an animation created from the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence). Depending on what this is set to, playing multiple animations at once will look to this property to figure out which [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) `Poses` should be played over one another.

When an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) has been created from an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation), its [AnimationTrack.Priority](https://developer.roblox.com/en-us/api-reference/property/AnimationTrack/Priority) property will default to the original [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) value. Note this value can be overwritten.