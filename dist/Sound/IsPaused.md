This read-only property will return true when the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is not
playing. Note that this property will not only return true once a sound
has been paused using the [`Sound:Pause()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Pause) function but also if it
has been stopped using the [`Sound:Stop()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stop) function or never been
played.

This property will only be true when [`Sound.IsPlaying`](https://create.roblox.com/docs/reference/engine/classes/Sound#IsPlaying) is false.

As IsPaused is read only it can not be used to stop the sound,
[`Sound:Stop()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stop) and [`Sound:Pause()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Pause) should be used instead.