This object stores all the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)s for an animation, determines if the animation is looped, and determines its priority against other animations.

What is a Keyframe Sequence?
----------------------------

The animation data Roblox uses in the playback of an animation, referenced by the [Animation.AnimationId](https://developer.roblox.com/en-us/api-reference/property/Animation/AnimationId) property, is constructed from a KeyframeSequence. Every animation has a KeyframeSequence associated with it. KeyframeSequences are usually created by the Roblox Animation Editor but can be created through other plugins or even manually. Once uploaded to Roblox, their Content ID is used for the [Animation.AnimationId](https://developer.roblox.com/en-us/api-reference/property/Animation/AnimationId) property.

Note, in most cases developers do not need to manipulate KeyframeSequences as the animation editor covers most animation functionality. However, in some cases a developer may wish to generate an animation from a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or build their own plugin.

KeyframeSequence Properties
---------------------------

The priority and looped animation settings are set by `KeyframeSequence/Priority` and `KeyframeSequence/Loop`. Note these can be eventually overwritten by the [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) properties.

The length of an animation is determined by the last [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) in the sequence, meaning the [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe) with the highest [Keyframe.Time](https://developer.roblox.com/en-us/api-reference/property/Keyframe/Time) property.

KeyframeSequence Structure
--------------------------

KeyframeSequences are a container that hold [Keyframe](https://developer.roblox.com/en-us/api-reference/class/Keyframe)s. Keyframes represent a 'key' frame in the animation, that are interpolated between during playback.

Keyframes contain [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s. [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose)s are specific to each [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) being animated and contain the `CFrame` applied to the [Motor6D](https://developer.roblox.com/en-us/api-reference/class/Motor6D) connecting to the part. Poses are named according to the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) they correspond with. For this reason, animations require distinct part names to play correctly.

Poses are structured based on joint hierarchy. Each [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) is parented to the [Pose](https://developer.roblox.com/en-us/api-reference/class/Pose) corresponding to the part it is attached to. In practice, this means the poses branch out from the root part. See below for a visual example.

![](https://developer.roblox.com/assets/blt2e767397c28fecda/KeyframeSequence_-_Copy.png)

Using KeyframeSequences when making animations
----------------------------------------------

KeyframeSequences must be first uploaded to Roblox before they can be played. This can be done by right clicking on the KeyframeSequence and clicking 'Save to Roblox'. Alternatively, [Plugin:SaveSelectedToRoblox](https://developer.roblox.com/en-us/api-reference/function/Plugin/SaveSelectedToRoblox) can be used. This will bring up the animation upload window.

In some cases, a developer may want to preview an Animation before uploading it to the Roblox site. This can be achieved by generating a temporary id using [KeyframeSequenceProvider:RegisterKeyframeSequence](https://developer.roblox.com/en-us/api-reference/function/KeyframeSequenceProvider/RegisterKeyframeSequence). This will generate a hash id that can be used for localized animation testing.

Obtaining KeyframeSequences
---------------------------

In some cases the developer may wish to download the KeyframeSequence corresponding to an existing uploaded Animation. This can be done so using [KeyframeSequenceProvider:GetKeyframeSequenceAsync](https://developer.roblox.com/en-us/api-reference/function/KeyframeSequenceProvider/GetKeyframeSequenceAsync).