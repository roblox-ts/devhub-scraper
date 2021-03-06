Sets how fast 3D [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) volume attenuates, or 'rolls off'.

Note, this property only applies to [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound)s whose [Sound.RollOffMode](https://developer.roblox.com/en-us/api-reference/property/Sound/RollOffMode) property is set to 'Inverse' or 'InverseTapered'. 'Linear' and 'LinearSquare' [RollOffMode](https://developer.roblox.com/en-us/api-reference/enum/RollOffMode)s use a different attenuation model which is not influenced by this property. This property also has no impact on 2D sounds ([Sound](https://developer.roblox.com/en-us/api-reference/class/Sound)s not parented to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)).

The higher the RolloffScale, the more rapidly a 3D sound's volume will attenuate as the distance between the listener and the sound increases.

By default the roll off scale is set to 1, which simulates the real world.

local SoundService = game:GetService("SoundService")
SoundService.RolloffScale = 1 -- attenuation simulates real world
SoundService.RolloffScale = 2 -- sound attenuates twice as fast as the real world

Developers wishing to learn more about the different settings Roblox's sound engine uses should consult the [FMOD documentation](https://www.fmod.com/docs/api/content/generated/overview/3dsound.html).