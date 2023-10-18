The Sound.Loaded event fires when the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is loaded.

Note this event will only fire at the time the sound is loaded. This means
if it is listened for when the sound is already loaded it will not return.
Therefore it is recommended to check [`Sound.IsLoaded`](https://create.roblox.com/docs/reference/engine/classes/Sound#IsLoaded) prior to
connecting to this event.