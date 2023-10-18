Stops the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). Once called playback of the
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) will stop and the weight of the animation will move
towards zero over a length of time specified by the optional fadeTime
parameter.

For example, if Stop is called with a fadeTime of 2 seconds it will take
two seconds for the weight of the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) to reach zero and
its effects completely end. Please note this will be the case regardless
of the initial weight of the animation.

It is not recommended to use a fadeTime of 0 seconds to try to override
this effect and end the animation immediately as presently, this causes
the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) poses to freeze.