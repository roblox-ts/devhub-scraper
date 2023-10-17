This property sets how 3D [`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) attenuate (fade out) as the
distance between the listener and the sound's parent increase. It can be
set to one of the values of the `Enum.RollOffMode` enum.

The following code will set RollOffMode to Linear:
```lua
sound.RollOffMode = Enum.RollOffMode.Linear
```
#### The different modes

The following options are available:
| Mode | Description |
| - | - |
| Inverse | Volume attenuates from `Sound/RollOffMinDistance` in an inverse manner. |
| InverseTapered | A hybrid model. Follows the Inverse model when close to `RollOffMinDistance` and the Linear Square model when close to `Sound/RollOffMaxDistance`. |
| Linear | Volume attenuates between `RollOffMinDistance` and `Sound/RollOffMaxDistance` with a linear relationship. |
| LinearSquare | Volume attenuates between `RollOffMinDistance` and `Sound/RollOffMaxDistance` with a linear squared relationship. |

#### Inverse vs Linear Distance Attenuation

By default sounds are set to use inverse distance attenuation
(Enum.RollOffMode.Inverse) which mirrors how sounds attenuate in the real
world. Under inverse distance attenuation, sounds will begin to attenuate
once the distance between the listener and the Sound's parent exceeds
RollOffMinDistance. The rate of attenuation depends on the emitter size,
as sounds with larger EmitterSize's will attenuate at a slower rate.
Inverse rate of inverse distance attenuation is further influenced by
[`SoundService.RolloffScale`](https://create.roblox.com/docs/reference/engine/classes/SoundService#RolloffScale).

RollOffMaxDistance will not effect attenuation under the inverse model but
will cause the sound to cut off completely once this distance is reached.
This can be particularly abrupt when using low values for max distance.

Linear distance attenuation works differently. Under linear distance
attenuation the sound will attenuate between RollOffMinDistance and
RollOffMaxDistance, falling silent once MaxDistance is reached.
RollOffMinDistance still denotes the point at which the sound will begin
attenuating. However, the audible volume at any point now depends on the
point the listener is at between EmitterSize and MaxDistance. This means,
in contrast to the inverse distance attenuation model, the audible volume
of the sound will approach silence at MaxDistance point. This is less
realistic, but may be more desirable in some cases.