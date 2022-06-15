This function adds a [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) to the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) by parenting it to the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence). It is functionally identical to setting the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)'s [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to the [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence).

Note, this function will not error when an instance other than a [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) is given as the keyframe parameter and will parent it successfully.