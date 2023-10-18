Gain value at which the compressor will start to modify the input stream,
in decibels, with a range of -60 to 0. When the input stream's volume
surpasses [`Threshold`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor#Threshold), the compressor will
take [`Attack`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor#Attack) seconds to kick in. When the
input stream's volume recedes below
[`Threshold`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor#Threshold), the compressor will take
[`Release`](https://create.roblox.com/docs/reference/engine/classes/AudioCompressor#Release) seconds to stop acting.

If any [`Wires`](https://create.roblox.com/docs/reference/engine/classes/Wire) are connected to the **Sidechain** pin of the
compressor, this threshold analyzes those streams instead of the **Input**
streams; this can be used to duck the volume of one stream in response to
another.