[`AudioListener`](https://create.roblox.com/docs/reference/engine/classes/AudioListener) records an audio stream from its surrounding
[`AudioEmitters`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter) in the 3D world. It provides a single
**Output** pin which can be connected to other pins via [`Wires`](https://create.roblox.com/docs/reference/engine/classes/Wire). If
the parent is an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera), or [`PVInstance`](https://create.roblox.com/docs/reference/engine/classes/PVInstance),
the parent's world `Datatype.CFrame` will be used for listening. If the parent
is not one of these classes, the [`AudioListener`](https://create.roblox.com/docs/reference/engine/classes/AudioListener) effectively hears
nothing.