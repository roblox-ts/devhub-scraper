Returns the position in time in seconds that an [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) is
through playing its source animation. Can be set to make the track jump to
a specific moment in the animation.

TimePosition can be set to go to a specific point in the animation, but
the [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) must be playing to do so. It can also be used in
combination with [AnimationTrack:AdjustSpeed](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#AdjustSpeed) to freeze the animation at a
desired point (by setting speed to 0).