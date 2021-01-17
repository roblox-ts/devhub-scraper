When weight is set in an [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) it does not change instantaneously but moves from \`\`AnimationTrack/WeightCurrent\` to WeightTarget. The time it takes to do this is determined by the fadeTime parameter given when the animation is played, or the weight is adjusted.

WeightCurrent can be checked against this property to see if the desired weight has been reached. To see if WeightCurrent has reached the target weight, it is recommended to see if the distance between those values is sufficiently small (see the `WeightCurrent and WeightTarget` code sample below).

Note that these values should not be checked for equality with the == operator, as both of these values are floats.

The animation weighting system is used to determine how [AnimationTracks](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) playing at the same priority are blended together. The default weight is one, and no movement will be visible on an AnimationTrack with a weight of zero. The pose that is shown at any point in time is determined by the weighted average of all the [Poses](https://developer.roblox.com/en-us/api-reference/class/Pose) and the WeightCurrent of each AnimationTrack.

In most cases blending animations is not required and using \`AnimationTrack/Priority\` is more suitable.