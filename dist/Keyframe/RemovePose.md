This function removes a [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) from the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) by setting its [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to nil.

The [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)'s [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) is set to nil, but it is not destroyed. This means, provided the pose is referenced it can be re-parented later.

Note, this function will not error when an instance other than a [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) is given as the pose parameter.