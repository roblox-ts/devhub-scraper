[`Wire`](https://create.roblox.com/docs/reference/engine/classes/Wire) connects one or more [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) to form a
processing graph of their streams. Each [`Wire`](https://create.roblox.com/docs/reference/engine/classes/Wire) connects a source and
target instance, and a source and target "pin" within each of those instances.
Pins are string identifiers that select which stream is to be carried by the
wire.

At the moment, only audio streams are supported, but this may expand in the
future.

The following instances may be connected by [`Wires`](https://create.roblox.com/docs/reference/engine/classes/Wire):

- [`AudioAnalyzer`](https://create.roblox.com/docs/reference/engine/classes/AudioAnalyzer)
- [`AudioCompressor`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor)
- [`AudioDeviceInput`](https://create.roblox.com/docs/reference/engine/classes/AudioDeviceInput)
- [`AudioDeviceOutput`](https://create.roblox.com/docs/reference/engine/classes/AudioDeviceOutput)
- [`AudioDistortion`](https://create.roblox.com/docs/reference/engine/classes/AudioDistortion)
- [`AudioEcho`](https://create.roblox.com/docs/reference/engine/classes/AudioEcho)
- [`AudioEmitter`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter)
- [`AudioEqualizer`](https://create.roblox.com/docs/reference/engine/classes/AudioEqualizer)
- [`AudioFader`](https://create.roblox.com/docs/reference/engine/classes/AudioFader)
- [`AudioFlanger`](https://create.roblox.com/docs/reference/engine/classes/AudioFlanger)
- [`AudioListener`](https://create.roblox.com/docs/reference/engine/classes/AudioListener)
- [`AudioPitchShifter`](https://create.roblox.com/docs/reference/engine/classes/AudioPitchShifter)
- [`AudioPlayer`](https://create.roblox.com/docs/reference/engine/classes/AudioPlayer)
- [`AudioReverb`](https://create.roblox.com/docs/reference/engine/classes/AudioReverb)