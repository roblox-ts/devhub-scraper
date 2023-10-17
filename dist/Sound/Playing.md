Indicates whether the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is currently playing. This can be
toggled, and this property will always replicate.

In the studio editor, [`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) are not playable because time
is halted. Setting [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) to true in edit mode doesn't do
anything. However, you can play audio from within plugins by setting the
[`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) as descendants of a [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui).

This property should not be confused with [`Sound.IsPlaying`](https://create.roblox.com/docs/reference/engine/classes/Sound#IsPlaying) which is
a read-only property. Playing can be set to true or false to start or stop
the playback of a sound.

Note that when Playing is set to false, the [`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition)
property of the sound will not reset. This means when the Playing is set
to true again the audio will continue from the time position it was at
when it was stopped. However, if the [`Sound:Play()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Play) function is used
to resume the sound the time position will reset to 0.