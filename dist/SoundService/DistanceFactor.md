The number of studs to be considered a meter by [`SoundService`](https://create.roblox.com/docs/reference/engine/classes/SoundService) when
calculating 3D [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) volume attenuation.

By default, the DistanceFactor is 3.33. This means, for the purposes of
volume attenuation, a meter is considered 3.33 studs. The greater the
DistanceFactor, the more gradually sound will attenuate.
```lua
local SoundService = game:GetService("SoundService")
SoundService.DistanceFactor = 1 -- 1 meter = 1 stud
SoundService.DistanceFactor = 10 -- 1 meter = 10 studs
```

Developers are advised to only change this property if their game uses a
different scale. For example, when using larger custom characters,
developers may want to reduce the DistanceFactor. In all other cases,
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) settings such as [`Sound.RollOffMode`](https://create.roblox.com/docs/reference/engine/classes/Sound#RollOffMode) should be used
instead.

Those looking to find out more about how 3D sound in Roblox works, should
consult the
[FMOD documentation](https://create.roblox.com/docs/https://www.fmod.com/docs/api/content/generated/overview/3dsound.html).