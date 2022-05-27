A read only property that returns true when the [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) is
playing.

This property can be used by developers to check if an animation is
already playing before playing it (as that would cause it to restart). If
a developer wishes to obtain all playing [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack)s on a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
or [AnimationController](https://create.roblox.com/docs/reference/engine/classes/AnimationController) they should use
[Humanoid:GetPlayingAnimationTracks](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetPlayingAnimationTracks)