Fires when the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is resumed using [`Sound:Resume()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resume).

As with [`Sound.Played`](https://create.roblox.com/docs/reference/engine/classes/Sound#Played), [`Sound.Paused`](https://create.roblox.com/docs/reference/engine/classes/Sound#Paused) and
[`Sound.Stopped`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stopped) only the respective sound function will cause the
event to fire. This means that Resumed will only fire when
[`Sound:Resume()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resume) is called.