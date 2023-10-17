The Speed of an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) is a read only property that gives
the current playback speed of the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack). This has a
default value of 1. When speed is equal to 1, the amount of time an
animation takes to complete is equal to [`AnimationTrack.Length`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Length) (in
seconds).

If the speed is adjusted, then the actual time it will take a track to
play can be computed by dividing the length by the speed. Speed is a
unitless quantity.

Speed can be used to link the length of an animation to different game
events (for example recharging an ability) without having to upload
different variants of the same animation.

This property is read only, and you can change it using
[`AnimationTrack:AdjustSpeed()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#AdjustSpeed).