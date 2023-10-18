This function returns an array containing all
[`KeyframeMarkers`](https://create.roblox.com/docs/reference/engine/classes/KeyframeMarker) that have been added to the
[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe). Note, this function will only return
[`instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) of type KeyframeMarker.
#### More about Keyframes

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names do not need to be unique. For example, if an
Animation has three keyframes named "Particles" the connected event
returned by [`AnimationTrack:GetMarkerReachedSignal()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#GetMarkerReachedSignal) will fire each
time one of these keyframes is reached.

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names can be set in the Roblox Animation Editor when
creating or editing an animation. They cannot however be set by a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) on an existing animation prior to playing it.

See also:

- [`Keyframe:AddMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#AddMarker)
- [`Keyframe:RemoveMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#RemoveMarker)
- [`AnimationTrack:GetMarkerReachedSignal()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#GetMarkerReachedSignal)