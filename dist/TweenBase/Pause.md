Halts playback of the tween. Doesn't reset its progress variables, meaning
that if you call [`TweenBase:Play()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Play), the tween resumes playback from
the moment it was paused.

If you want to reset the progress variables of the tween, use
[`TweenBase:Cancel()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Cancel).