Shows the progress in seconds of the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound). Can be changed to move
the playback position of the sound. If the sound is already playing then
playback will snap to the specified position. If it is not playing the
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) will begin playback at the set position when the sound is
next played.

As a [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is played, TimePosition increases at a rate of
[`Sound.PlaybackSpeed`](https://create.roblox.com/docs/reference/engine/classes/Sound#PlaybackSpeed) per second. Once TimePosition reaches
[`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength) the Sound will stop unless it is looped. This
means, unless [`Sound.Looped`](https://create.roblox.com/docs/reference/engine/classes/Sound#Looped) is set to true setting TimePosition to
a value equal or greater to [`Sound.TimeLength`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimeLength) will stop the sound.

Note that setting `TimePosition` to a value greater than the length in a
looped track will not cause it to wrap around. If that behavior is desired
the developer should do the following.
```lua
if newPosition >= sound.TimeLength then
	newPosition = newPosition - sound.TimeLength
end
sound.TimePosition = newPosition
```

Setting TimePosition to a value less than zero currently does not
influence playback, but this behavior should not be relied upon.