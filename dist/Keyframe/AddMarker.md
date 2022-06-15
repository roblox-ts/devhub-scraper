This function adds a [KeyframeMarker](https://developer.roblox.com/en-us/api-reference/class/KeyframeMarker) to the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) by parenting it to the keyframe. It is functionally identical to setting the marker's [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to the Keyframe.

Note, this function will not error when an instance other than a KeyframeMarker is given as the parameter and will parent it successfully.

More about Keyframes
--------------------

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names do not need to be unique. For example, if an Animation has three keyframes named “Particles” the connected event returned by [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal) will fire each time one of these keyframes is reached.

[Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) names can be set in the Roblox Animation Editor when creating or editing an animation. They cannot however be set by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) on an existing animation prior to playing it.

See also
--------

*   [Keyframe:RemoveMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/RemoveMarker)
*   [Keyframe:GetMarkers](https://developer.roblox.com/en-us/api-reference/function/Keyframe/GetMarkers)
*   [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal)