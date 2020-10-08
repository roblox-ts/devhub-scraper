This property sets the priority of an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack). Depending on what this is set to, playing multiple animations at once will look to this property to figure out which [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s should be played over one another.

The Priority property for [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) defaults to how it was set in the editor. It uses the AnimationPriority Enum, which as four priority levels.

1.  Core (lowest priority)
2.  Idle
3.  Movement
4.  Action (highest priority)

Correctly set animation priorities, either through the editor or through this property allow multiple animations to be played without them clashing. Where two playing animations direct the target to move the same limb in different ways, the [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) with the highest priority will show. If both animations have the same priority, the weight of both tracks will be used to combine the animations.

This property also allows the developer to play the same animation at different priorities, without needing to upload additional versions to Roblox.