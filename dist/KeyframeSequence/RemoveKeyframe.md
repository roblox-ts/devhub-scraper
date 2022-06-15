This function removes a [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) from the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) by setting its parent to nil. It is functionally identical to setting the keyframe's parent to nil

The [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)'s parent is set to nil, but it is not destroyed. This means, provided the keyframe is referenced it can be re-parented later.

Note, this function will not error when an [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) other than a [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) is given as the keyframe parameter.