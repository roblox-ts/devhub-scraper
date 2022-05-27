The minimum distance, in studs, at which a 3D [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) (direct child of a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment)) will begin to attenuate (decrease in volume).

Sounds parented to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) that are descendants of
the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) are considered 3D sounds and their volume whilst playing
is dependent on the distance between the client's sound listener ([Camera](https://create.roblox.com/docs/reference/engine/classes/Camera)
position by default) and the Sound's parent. Two properties influence this
behavior EmitterSize and [Sound.RollOffMode](https://create.roblox.com/docs/reference/engine/classes/Sound#RollOffMode).

The way the [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) attenuates (fades out) after the distance between the
listener and the sound exceeds the EmitterSize is determined by
RollOffMode.