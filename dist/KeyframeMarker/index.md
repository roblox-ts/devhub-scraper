A KeyframeMarker is an instance meant to represent an event that will
eventually be fired when a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) is hit.
## Using a KeyframeMarker

KeyframeMarkers should always be parented to a Keyframe via setting the parent
directly or using the [`Keyframe:AddMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#AddMarker) function of Keyframe.
KeyframeMarkers can also be removed directly or using the
[`Keyframe:RemoveMarker()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#RemoveMarker) function, and polled to check which markers
are attached to a specific Keyframe using [`Keyframe:GetMarkers()`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#GetMarkers).

Whenever a Keyframe is detected as an animation is running, there will be an
event fired for each KeyframeMarker that is parented to the Keyframe. These
events are identifiable by the name of the KeyframeMarker. You can retrieve
and listen to these events using the
[`AnimationTrack.GetKeyframeMarkerReached`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#GetKeyframeMarkerReached) function. Optionally, you may
set the [`KeyframeMarker.Value`](https://create.roblox.com/docs/reference/engine/classes/KeyframeMarker#Value) property of the KeyframeMarker in order
to pass along a value with the event being fired.

It inherits the [`Keyframe.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) property from
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) and behaves identically. Names are used for identification
and no not need to be unique. When multiple KeyFrameMarkers with the same name
are attached to a KeyFrame, events such as the one returned by
[`AnimationTrack:GetMarkerReachedSignal()`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack#GetMarkerReachedSignal) will fire for every marker.

See also:

- [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe), holds the [`Poses`](https://create.roblox.com/docs/reference/engine/classes/Pose) applied to joints in a
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) at a given point of time in an animation
- [`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack), controls the playback of an animation on a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) or [`AnimationController`](https://create.roblox.com/docs/reference/engine/classes/AnimationController)
- [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation), holds a reference to animation data required to play
custom animations on characters or other models using the Roblox animation
system