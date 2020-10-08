This function returns an [event](https://developer.roblox.com/en-us/api-reference/datatype/RBXScriptSignal) similar to the [AnimationTrack.KeyframeReached](https://developer.roblox.com/en-us/api-reference/event/AnimationTrack/KeyframeReached) event, except it only fires when a specified [KeyframeMarker](https://developer.roblox.com/en-us/api-reference/class/KeyframeMarker) has been hit in an [animation](https://developer.roblox.com/en-us/api-reference/class/Animation). The difference allows for greater control of when the event will fire.

To learn more about using this function, see **Animation Events** in the `articles/using animation editor|Using the Animation Editor` article.

More About Keyframes
--------------------

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names can be set in the Roblox `articles/using animation editor|Animation Editor` when creating or editing an animation. They cannot, however, be set by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) on an existing animation prior to playing it.

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names do not need to be unique. For example, if an [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation) has three keyframes named “EmitParticles,” the connected event returned by this function will fire each time one of these keyframes is reached.

See Also
--------

*   [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack), controls the playback of an animation on a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) or [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController)
*   [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe), holds the [Poses](https://developer.roblox.com/en-us/api-reference/class/Pose) applied to joints in a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) at a given point of time in an animation
*   [Keyframe:AddMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/AddMarker)
*   [Keyframe:RemoveMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/RemoveMarker)
*   [Keyframe:GetMarkers](https://developer.roblox.com/en-us/api-reference/function/Keyframe/GetMarkers)