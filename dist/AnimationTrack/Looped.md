This property sets whether the animation will repeat after finishing. If
it is changed while playing the result will take effect after the
animation finishes.

The Looped property for [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) defaults to how it was set
in the animation editor. However this property can be changed, allowing
control over the [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) while the game is running. Looped
also correctly handles animations played in reverse (negative
[`AnimationTrack.Speed`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#Speed)). After the first keyframe is reached, it
will restart at the last keyframe.

This property allows the developer to have a looping and non looping
variant of the same animation, without needing to upload two versions to
Roblox.