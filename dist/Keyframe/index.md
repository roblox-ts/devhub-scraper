A Keyframe holds the [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s applied to joints in a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) at a given point of time in an animation. [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)s are interpolated between during animation playback.

Note, in most cases developers do not need to manipulate [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence)s as the animation editor covers most animation functionality. However, in some cases a developer may wish to generate an animation from a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or build their own plugin.

**Structure**

Keyframes are held within a [KeyframeSequence](https://developer.roblox.com/en-us/api-reference/class/KeyframeSequence) and contain [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) objects. The poses are named in accordance with the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s they correspond to and are structured in terms of joint hierarchy. This means each [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) is parented to the [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) corresponding to the part it is attached to. See below for a visual example.

![](https://developer.roblox.com/assets/blt2e767397c28fecda/KeyframeSequence_-_Copy.png)

Note, as [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s are named in accordance with the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s they correspond to, animations require distinct part names to play correctly.

**Interpolation**

During animation playback the poses in different keyframes are interpolated between. This allows a smooth animation to be created without needing to define every frame. Note, the style of interpolation is determined in the [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) object. The Keyframe object merely holds the [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s at a defined point of time in the animation ([Keyframe.Time](https://developer.roblox.com/en-us/api-reference/property/Keyframe/Time)).