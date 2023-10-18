Fires whenever the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is played using the [`Sound:Play()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Play)
function.

As with [`Sound.Stopped`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stopped), [`Sound.Paused`](https://create.roblox.com/docs/reference/engine/classes/Sound#Paused) and
[`Sound.Resumed`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resumed) only the respective sound function will cause the
event to fire. This means that Played will only fire when
[`Sound:Play()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Play) is called. This event will not fire if the
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is played due to the sound being destroyed and
[`Sound.PlayOnRemove`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlayOnRemove) being set to true.