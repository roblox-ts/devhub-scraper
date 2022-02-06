A KeyframeMarker is an instance meant to represent an event that will eventually be fired when a [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) is hit.

Using a KeyframeMarker
----------------------

KeyframeMarkers should always be parented to a Keyframe via setting the parent directly or using the [Keyframe:AddMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/AddMarker) function of Keyframe. KeyframeMarkers can also be removed directly or using the [Keyframe:RemoveMarker](https://developer.roblox.com/en-us/api-reference/function/Keyframe/RemoveMarker) function, and polled to check which markers are attached to a specific Keyframe using [Keyframe:GetMarkers](https://developer.roblox.com/en-us/api-reference/function/Keyframe/GetMarkers).

Whenever a Keyframe is detected as an animation is running, there will be an event fired for each KeyframeMarker that is parented to the Keyframe. These events are identifiable by the name of the KeyframeMarker. You can retrieve and listen to these events using the `AnimationTrack/GetKeyframeMarkerReached` function. Optionally, you may set the [KeyframeMarker.Value](https://developer.roblox.com/en-us/api-reference/property/KeyframeMarker/Value) property of the KeyframeMarker in order to pass along a value with the event being fired.

It inherits the [Keyframe.Name](https://developer.roblox.com/en-us/api-reference/property/Instance/Name) property from [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) and behaves identically. Names are used for identification and no not need to be unique. When multiple KeyFrameMarkers with the same name are attached to a KeyFrame, events such as the one returned by [AnimationTrack:GetMarkerReachedSignal](https://developer.roblox.com/en-us/api-reference/function/AnimationTrack/GetMarkerReachedSignal) will fire for every marker.

See also
--------

*   [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe), holds the [Poses](https://developer.roblox.com/en-us/api-reference/class/Pose) applied to joints in a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) at a given point of time in an animation
*   [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack), controls the playback of an animation on a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) or [AnimationController](https://developer.roblox.com/en-us/api-reference/class/AnimationController)
*   [Animation](https://developer.roblox.com/en-us/api-reference/class/Animation), holds a reference to animation data required to play custom animations on characters or other models using the Roblox animation system