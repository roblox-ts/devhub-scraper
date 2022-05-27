A service that determines various aspects of how [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound)s play in the game.
SoundService is also often used to store [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup)s although this is not
mandatory for [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup)s to work.

## What can SoundService do?

SoundService properties such as [SoundService.AmbientReverb](https://create.roblox.com/docs/reference/engine/classes/SoundService#AmbientReverb),
[SoundService.DistanceFactor](https://create.roblox.com/docs/reference/engine/classes/SoundService#DistanceFactor), [SoundService.DopplerScale](https://create.roblox.com/docs/reference/engine/classes/SoundService#DopplerScale) and
[SoundService.RolloffScale](https://create.roblox.com/docs/reference/engine/classes/SoundService#RolloffScale) can be used to change how all [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound)s play in the
game.

The [SoundService:SetListener](https://create.roblox.com/docs/reference/engine/classes/SoundService#SetListener) function allows developers to set the position
where sounds are heard from.

[SoundService:PlayLocalSound](https://create.roblox.com/docs/reference/engine/classes/SoundService#PlayLocalSound) can be used to play a sound locally regardless
of where it is parented to.

Developers looking to find out more about how sound works in Roblox should
consult the documentation provided for the [FMOD sound engine][1].

[1]: https://www.fmod.com/docs/api/content/generated/overview/3dsound.html