This function returns an [`event`](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptSignal) similar to the
[`AnimationTrack.KeyframeReached`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#KeyframeReached) event, except it only fires when a
specified [`KeyframeMarker`](https://create.roblox.com/docs/reference/engine/classes/KeyframeMarker) has been hit in an
[`animation`](https://create.roblox.com/docs/reference/engine/classes/Animation). The difference allows for greater control of
when the event will fire.

To learn more about using this function, see **Animation Events** in the
[Animation Editor](https://create.roblox.com/docs/animation/editor) article.
#### More About Keyframes

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names can be set in the Roblox
[Animation Editor](https://create.roblox.com/docs/animation/editor) when creating or editing
an animation. They cannot, however, be set by a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) on an
existing animation prior to playing it.

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names do not need to be unique. For example, if an
[`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) has three keyframes named "EmitParticles," the connected
event returned by this function will fire each time one of these keyframes
is reached.

See also:

- [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack), controls the playback of an animation on a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) or [`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController)
- [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe), holds the [`Poses`](https://create.roblox.com/docs/reference/engine/classes/Pose) applied to joints in a
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) at a given point of time in an animation
- [`Keyframe:AddMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#AddMarker)
- [`Keyframe:RemoveMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#RemoveMarker)
- [`Keyframe:GetMarkers()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#GetMarkers)