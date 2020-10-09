A [SoundGroup](https://developer.roblox.com/en-us/api-reference/class/SoundGroup) is used to manage the volume and effects on multiple [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound)s at once. Every sound in the sound group will have its volume adjusted by the group's [SoundGroup.Volume](https://developer.roblox.com/en-us/api-reference/property/SoundGroup/Volume) property. If the SoundGroup has any [SoundEffect](https://developer.roblox.com/en-us/api-reference/class/SoundEffect)s as children, those effects will be applied to all of the [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound)s in the group.

The [SoundGroup.Volume](https://developer.roblox.com/en-us/api-reference/property/SoundGroup/Volume) property acts as a multiplier, and thus sounds in a SoundGroup will retain their relative volumes when it is set. This means if a sound's volume is 0.5 and it is assigned to a SoundGroup with a volume of 0.5, its effective volume will be 0.25.

Grouping sounds of the same category has several uses for developers. One common usage of a sound group is to assign all of the music that can play in game to a SoundGroup called “music.” Players could then easily toggle all music on or off.

Setting sound groups
--------------------

A [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) is added to a [SoundGroup](https://developer.roblox.com/en-us/api-reference/class/SoundGroup) by setting the [Sound.SoundGroup](https://developer.roblox.com/en-us/api-reference/property/Sound/SoundGroup) property of the [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound). A [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) can only be in one [SoundGroup](https://developer.roblox.com/en-us/api-reference/class/SoundGroup) at a time. Whilst they can be parented elsewhere, it is recommended to keep SoundGroups parented to the [SoundService](https://developer.roblox.com/en-us/api-reference/class/SoundService). In the below example, a sound is parented to a SoundGroup called 'Music'.

```lua
Sound.SoundGroup = game:GetService("SoundService"):FindFirstChild("Music")
```