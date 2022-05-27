This property will be true when the [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) has loaded loaded from Roblox
servers and is ready to play.

In Roblox, audio files are not stored in games themselves but hosted on
the Roblox servers and referenced by the [Sound.SoundId](https://create.roblox.com/docs/reference/engine/classes/Sound#SoundId) property. This
means that they need to be downloaded to a client's device before they can
be played. This can take a while depending on the user's internet
connection, the length of the sound and the number of other objects that
need to be loaded.

Developers can use the [Sound.IsLoaded](https://create.roblox.com/docs/reference/engine/classes/Sound#IsLoaded) property and the [Sound.Loaded](https://create.roblox.com/docs/reference/engine/classes/Sound#Loaded)
event if they wish to verify a sound has loaded before playing it.