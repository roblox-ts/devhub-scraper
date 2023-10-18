Fires when the tween finishes playing or when stopped with
[`TweenBase:Cancel()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Cancel).

Passes the [`Enum.PlaybackState`](https://create.roblox.com/docs/reference/engine/enums/PlaybackState) of the tween to any connected functions to
give an indication of why the tween ended. Note that calling
[`TweenBase:Pause()`](https://create.roblox.com/docs/reference/engine/classes/TweenBase#Pause) does not fire the `Completed` event.