The AnimationPlayed event fires when an [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) begins
playing on the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

A common use for this function is to connect the
[`AnimationTrack.KeyframeReached`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#KeyframeReached) event for the playing
AnimationTrack, so additional effects can be added to the animation (for
example [`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) and
[`ParticleEmitters`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)).

This event can be used for any [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) regardless if it belongs
to the local player's client or not.

See also:

- For the [`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController) equivalent of this event, please see
[`AnimationController.AnimationPlayed`](https://create.roblox.com/docs/reference/engine/classes/AnimationController#AnimationPlayed)