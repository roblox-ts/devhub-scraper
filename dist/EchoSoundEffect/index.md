An echo effect causes a sound to repeat on a delay with diminishing volume,
simulating the real effect of an echo. This effect can be applied to either an
individual sound or to a sound group by parenting it to the desired instance.

The effect is controlled by several properties. First, the Delay is how long
the effect will wait to play the echoed sound. Feedback determines how much
the original signal is diminished to play as the echoed sound. Note that this
echoed sound also goes through the echo effect which will wait another delay
and play another echo. This process will repeat until the volume of the echoed
sound is negligible.

You can also adjust the wet/dry mix of the effect. The dry component of the
sound is the original sound that the effect is being applied to. You can
adjust the volume of the dry sound by adjusting the DryLevel. The wet sound is
the echoed effect itself, and its volume can be adjusted with WetLevel.

It is recommended to only use the EchoSoundEffect with sound groups. If an
echo effect is applied to a regular Sound, once that sound stops playing the
echo effect will also be cut off. When applied to a SoundGroup, the echo
effect will continue playing even if the original source sound has
stopped.Like all other [SoundEffect](https://create.roblox.com/docs/reference/engine/classes/SoundEffect), a EchoSoundEffect can be applied either
to a [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) or [SoundGroup](https://create.roblox.com/docs/reference/engine/classes/SoundGroup) by being parented to either.