The volume multiplier applied to [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound)s that are in the [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup).
This value ranges from 0 to 10.

This property acts as a multiplier, and thus sounds in a [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup) will
retain their relative volumes when it is set. This means if a sound's
[Sound.Volume](https://create.roblox.com/docs/reference/engine/classes/Sound#Volume) is 0.5 and it is assigned to a [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup) with a volume
of 0.5, its effective volume will be 0.25.