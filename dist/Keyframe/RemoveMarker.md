This function removes a [`KeyframeMarker`](https://create.roblox.com/docs/reference/engine/classes/KeyframeMarker) from the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)
by settings its [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to nil.

The KeyframeMarker's [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is set to nil but it is not
destroyed. This means, provided the marker is referenced it can be
re-parented later.

Note, this function will not error when an instance other than a
KeyframeMarker is given as the parameter.
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
- [`Keyframe:GetMarkers()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#GetMarkers)
- [`AnimationTrack:GetMarkerReachedSignal()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#GetMarkerReachedSignal)