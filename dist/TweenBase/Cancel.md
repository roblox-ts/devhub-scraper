Halts playback of a [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) and resets the tween variables.

Only resets the tween variables, not the properties being changed by the
tween. If you cancel a tween halfway through its animation, the properties
do not reset to their original values. Differs from
[`TweenBase:Pause()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Pause) in that once resumed, it takes the full duration
of the tween to complete the animation.