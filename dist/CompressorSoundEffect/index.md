A compressor is used to reduce the dynamic range of audio by moving the highs
and lows of a signal closer together. It does this by lowering the volume of
the highest parts of a source while at the same time raising the overall
volume. This type of effect is useful when you have many sounds playing and
you want to make sure the quieter ones are still audible. This effect can be
applied to either an individual sound or to a sound group by parenting it to
the desired instance.

Like all other [SoundEffect](https://create.roblox.com/docs/reference/engine/classes/SoundEffect), a ChorusSoundEffect can be applied either to a
[Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) or [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup) by being parented to either.

A compressor has several properties which determine how it works. The
[CompressorSoundEffect.Threshold](https://create.roblox.com/docs/reference/engine/classes/CompressorSoundEffect#Threshold) is the audio level where the compressor will
start to lower the volume. As soon as the source goes below the threshold, the
compressor will stop lowering the volume.

The [CompressorSoundEffect.Attack](https://create.roblox.com/docs/reference/engine/classes/CompressorSoundEffect#Attack) determines how long it takes for the
compressed effect to fully apply. After the threshold has been crossed the
compressor will lower the volume over time until the desired ratio has been
reached. It will take the time specified by Attack to reach this ratio.

The [CompressorSoundEffect.Release](https://create.roblox.com/docs/reference/engine/classes/CompressorSoundEffect#Release) determines how long it takes for the
compressor to remove its effect. After the volume of the source is under the
threshold, the compressor will restore the volume back to the original over
the time specified by Release.

Along with lowering the volume when the sound has passed the threshold, a
compressor will also amplify the entire sound (after any threshold lowering
has taken effect). This allows quieter sounds to be amplified while louder
sounds can stay about the same. The [CompressorSoundEffect.GainMakeup](https://create.roblox.com/docs/reference/engine/classes/CompressorSoundEffect#GainMakeup)
determines how much the effect amplifies the sound.