This function changes the [`AnimationTrack.Speed`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Speed) of an animation. A
positive value for speed plays the animation forward, a negative one plays
it backwards, and 0 pauses it.

An AnimationTrack's initial speed is set as a parameter in
[`AnimationTrack:Play()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Play). However a track's Speed can be changed
during playback, using AdjustSpeed. When speed is equal to 1, the amount
of time an animation takes to complete is equal to
[`AnimationTrack.Length`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Length) (in seconds).

When is adjusted, then the actual time it will take a track to play can be
computed by dividing the length by the speed. Speed is a unitless
quantity.

Speed can be used to link the length of an animation to different gameplay
events (for example recharging an ability) without having to upload
different variants of the same animation.