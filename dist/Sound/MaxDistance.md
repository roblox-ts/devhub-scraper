The maximum distance, in studs, a client's listener can be from the
[`Sound's`](https://create.roblox.com/docs/reference/engine/classes/Sound) origin and still hear it. Only applies to Sounds
parented to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) (3D sounds).

How MaxDistance impacts the attenuation of a sound (manner in which it
fades out) is dependent on the [`Sound.RollOffMode`](https://create.roblox.com/docs/reference/engine/classes/Sound#RollOffMode) property. When
RollOffMode is set to use an inverse type distance model (Inverse or
InverseTapered) the MaxDistance will not effect the attenuation of the
sound. This means that low values for MaxDistance will cause the sound to
abruptly cut off when the listener reaches the MaxDistance. In most cases
this is not desirable and developers are advised not to use low
MaxDistance values.

When RollOffMode is set to a linear type distance model (Linear or
LinearSquared) the sound will attenuate between [`Sound.EmitterSize`](https://create.roblox.com/docs/reference/engine/classes/Sound#EmitterSize)
and MaxDistance (with playback volume reaching zero at MaxDistance). This
is less realistic, but in some cases allows attenuation to be handled in a
more intuitive way.