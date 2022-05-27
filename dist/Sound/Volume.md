The volume of the [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound). Can be set between 0 and 10. Defaults to 0.5

Note that if the [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) is a member of a [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup) its playback volume
(but not the Volume property) will be influenced by the
[SoundGroup.Volume](https://create.roblox.com/docs/reference/engine/classes/SoundGroup#Volume) property of that [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup). The effect of this is
multiplicative, meaning that a sound will play at the same volume if its
Volume is 0.1 and its [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup)'s volume is 5 and vice-versa.