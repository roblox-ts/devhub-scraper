This property sets the priority of an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). Depending on
what this is set to, playing multiple animations at once will look to this
property to figure out which [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose)s should be
played over one another.

The Priority property for [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) defaults to how it was
set and published from Studio's Animation Editor. It uses the
AnimationPriority Enum, which has 7 priority levels.

2. Core (lowest priority)
2. Idle
2. Movement
2. Action
2. Action2
2. Action3
2. Action4 (highest priority)

Correctly set animation priorities, either through the editor or through
this property allow multiple animations to be played without them
clashing. Where two playing animations direct the target to move the same
limb in different ways, the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) with the highest
priority will show. If both animations have the same priority, the weights
of the tracks will be used to combine the animations.

This property also allows the developer to play the same animation at
different priorities, without needing to upload additional versions to
Roblox.