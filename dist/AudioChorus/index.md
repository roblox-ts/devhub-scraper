[`AudioChorus`](https://create.roblox.com/docs/reference/engine/classes/AudioChorus) makes an audio stream sound more voluminous. It provides
one **Input** pin and one **Output** pin which can be connected to/from by
[`Wires`](https://create.roblox.com/docs/reference/engine/classes/Wire).

[`AudioChorus`](https://create.roblox.com/docs/reference/engine/classes/AudioChorus) is implemented by duplicating the input stream and
modulating the pitch of several delayed copies so that the overall result
sounds like a cloud of streams. If applied to a single voice, it may sound
like multiple voices.