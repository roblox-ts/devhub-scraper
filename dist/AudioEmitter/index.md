[`AudioEmitter`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter) emits audio streams into the world. It provides a single
**Input** pin that can be connected to by one or more [`Wires`](https://create.roblox.com/docs/reference/engine/classes/Wire). Any
streams wired to an [`AudioEmitter`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter) get broadcasted into the world from
the emitter's parent's position. If the parent is an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment),
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera), or [`PVInstance`](https://create.roblox.com/docs/reference/engine/classes/PVInstance), the parent's world-position will be
used. If the parent is not one of these classes, the [`AudioEmitter`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter) is
effectively silent.

[`AudioEmitters`](https://create.roblox.com/docs/reference/engine/classes/AudioEmitter) are heard by
[`AudioListeners`](https://create.roblox.com/docs/reference/engine/classes/AudioListener) in order to implement 3D spatialization.