Fires every time playback of an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) reaches a
[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) that does not have the default name - "Keyframe."

This event allows a developer to run code at predefined points in an
animation (set by [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names). This allows the default
functionality of Roblox animations to be expanded upon by adding
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound)s or `ParticleEffect`s at different points in an animation.

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names do not need to be unique. For example, if an
Animation has three keyframes named "Particles" the KeyframeReached event
will fire each time one of these keyframes is reached.

[`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) names can be set in the Roblox Animation Editor when
creating or editing an animation. They cannot however be set by a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) on an existing animation prior to playing it.