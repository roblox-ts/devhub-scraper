This function removes a [KeyframeMarker](https://developer.roblox.com/en-us/api-reference/class/KeyframeMarker) from the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)by settings its [Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to nil.

The KeyframeMarker's Instance.Parent is set to nil but it is not destroyed. This means, provided the marker is referenced it can be re-parented later.

Note, this function will not error when an instance other than a KeyframeMarker is given as the parameter.

More about Keyframes
--------------------

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names do not need to be unique. For example, if an Animation has three keyframes named “Particles” the connected event returned by [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal) will fire each time one of these keyframes is reached.

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names can be set in the Roblox Animation Editor when creating or editing an animation. They cannot however be set by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) on an existing animation prior to playing it.

See also
--------

*   [Keyframe:AddMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/AddMarker)
*   [Keyframe:GetMarkers](https://developer.roblox.com/en-us/api-reference/function/Keyframe/GetMarkers)
*   [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal)