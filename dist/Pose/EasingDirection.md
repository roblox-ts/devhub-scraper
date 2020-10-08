The EasingDirection determines the 'direction' of the interpolation style set by [Pose.EasingStyle](https://developer.roblox.com/en-us/api-reference/property/Pose/EasingStyle). Along with [Pose.EasingStyle](https://developer.roblox.com/en-us/api-reference/property/Pose/EasingStyle), it determines how the joint will interpolate from this [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) to the subsequent [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) during animation playback.

##Pose EasingDirection Values

*   **In** - Interpolation will play forwards, default value for poses
*   **Out** - Interpolation will play in reverse, default value in animation edtior
*   **InOut** - Interpolation will play forwards, then reverse at the mid-point

Note, this property is a [PoseEasingDirection](https://developer.roblox.com/en-us/api-reference/enum/PoseEasingDirection), which despite sharing the same options is different to the [EasingDirection](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection) used by other objects. Attempting to set this property to an [EasingDirection](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection) value will produce an error.

##Pose Interpolation

The [Pose.CFrame](https://developer.roblox.com/en-us/api-reference/property/Pose/CFrame) of each [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) determines the [Motor6D.Transform](https://developer.roblox.com/en-us/api-reference/property/Motor6D/Transform) of the joint associated with the pose at the time of its parent [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe). It does not reach this value instantly, but interpolates from the previous pose applied to that joint (which may not necessarily be in the previous keyframe).

The way in which a joint will interpolate between two [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s during animation playback is determined by the [Pose.EasingStyle](https://developer.roblox.com/en-us/api-reference/property/Pose/EasingStyle) and EasingDirection of the first pose.