Fires whenever the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is paused using [`Sound:Pause()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Pause).

As with [`Sound.Played`](https://create.roblox.com/docs/reference/engine/classes/Sound#Played), [`Sound.Resumed`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resumed) and
[`Sound.Stopped`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stopped) only the respective sound function will cause the
event to fire. This means that Pause will only fire when
[`Sound:Pause()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Pause) is called.