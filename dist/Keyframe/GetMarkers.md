This function returns an array containing all [KeyframeMarkers](https://developer.roblox.com/en-us/api-reference/class/KeyframeMarker) that have been added to the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe). Note, this function will only return [instances](https://developer.roblox.com/en-us/api-reference/class/Instance) of type KeyframeMarker.

More about Keyframes
--------------------

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names do not need to be unique. For example, if an Animation has three keyframes named “Particles” the connected event returned by [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal) will fire each time one of these keyframes is reached.

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names can be set in the Roblox Animation Editor when creating or editing an animation. They cannot however be set by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) on an existing animation prior to playing it.

See also
--------

*   [Keyframe:AddMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/AddMarker)
*   [Keyframe:RemoveMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/RemoveMarker)
*   [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal)