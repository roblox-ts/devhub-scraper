Starts playback of a tween. Note that if playback has already started,
calling `Play()` has no effect unless the tween has finished or is stopped
(either by [`TweenBase:Cancel()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Cancel) or [`TweenBase:Pause()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Pause)).

Multiple tweens can be played on the same object at the same time, but
they must not animate the same property. If two tweens attempt to modify
the same property, the initial tween is cancelled and overwritten by the
most recent tween (see examples).