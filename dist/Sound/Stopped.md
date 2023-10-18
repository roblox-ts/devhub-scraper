Fires when the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is stopped due to the [`Sound:Stop()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stop)
function.

As with [`Sound.Played`](https://create.roblox.com/docs/reference/engine/classes/Sound#Played), [`Sound.Paused`](https://create.roblox.com/docs/reference/engine/classes/Sound#Paused) and
[`Sound.Resumed`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resumed) only the respective sound function will cause the
event to fire. This means that Stopped will only fire when
[`Sound:Stop()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stop) is called. Destroying a sound while it is playing
will not cause this event to fire.