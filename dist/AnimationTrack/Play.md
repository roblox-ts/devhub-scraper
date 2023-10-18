When [`AnimationTrack:Play()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Play) is called the track's animation will
begin playing and the weight of the animation will increase from 0 to the
specified weight (defaults to 1) over the specified fadeTime (defaults to
0.1).

The speed the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) will play at is determined by the
speed parameter (defaults to 1). When the speed is equal to 1 the number
of seconds the track will take to complete is equal to the track's
[`AnimationTrack.Length`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Length) property. For example, a speed of 2 will
cause the track to play twice as fast.

The weight and speed of the animation can also be changed after the
animation has begun playing by using the
[`AnimationTrack:AdjustWeight()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#AdjustWeight) and
[`AnimationTrack:AdjustSpeed()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#AdjustSpeed) methods.

If the developer wants to start the animation at a specific point using
[`AnimationTrack.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#TimePosition), it is important the animation is
played before this is done.