[`AudioCompressor`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor) adjusts the dynamic range of audio streams. Any
momentary bursts of loudness will be clamped down according to the
compressor's properties.

[`AudioCompressor`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor) provides **Input** and **Sidechain** pins that can be
targeted by [`Wire.TargetName`](https://create.roblox.com/docs/reference/engine/classes/Wire#TargetName), and an **Output** pin that can be used by
[`Wire.SourceName`](https://create.roblox.com/docs/reference/engine/classes/Wire#SourceName).