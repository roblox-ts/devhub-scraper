When weight is set in an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) it does not change
instantaneously but moves from WeightCurrent to
[`AnimationTrack.WeightTarget`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#WeightTarget). The time it takes to do this is
determined by the fadeTime parameter given when the animation is played,
or the weight is adjusted.

WeightCurrent can be checked against [`AnimationTrack.WeightTarget`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#WeightTarget)
to see if the desired weight has been reached. Note that these values
should not be checked for equality with the == operator, as both of these
values are floats. To see if WeightCurrent has reached the target weight,
it is recommended to see if the distance between those values is
sufficiently small (see code sample below).

The animation weighting system is used to determine how
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)s playing at the same priority are blended together.
The default weight is one, and no movement will be visible on an
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) with a weight of zero. The pose that is shown at
any point in time is determined by the weighted average of all the
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose)s and the WeightCurrent of each [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). In
most cases blending animations is not required and using
[`AnimationTrack.Priority`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Priority) is more suitable.