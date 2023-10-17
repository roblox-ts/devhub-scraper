This object stores all the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)s for an animation, determines if
the animation is looped, and determines its priority against other animations.
## What is a KeyframeSequence?

Roblox constructs the animation data it uses in the playback of an animation,
referenced by the [`Animation.AnimationId`](https://create.roblox.com/docs/reference/engine/classes/Animation#AnimationId) property from a
KeyframeSequence. Every animation refers to a KeyframeSequence or to a
CurveAnimation internally. Although, usually created by the Roblox Animation
Editor, KeyframeSequence can also be created by other plugins or even
manually. Once uploaded to Roblox, Roblox assigns a Content ID that
[`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation)s use for the [`Animation.AnimationId`](https://create.roblox.com/docs/reference/engine/classes/Animation#AnimationId) property to refer
to the uploaded KeyframeSequence.

Note, in most cases, you do not need to manipulate KeyframeSequences, as the
animation editor covers most animation functionality. However, in some cases
you may wish to generate an animation from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or build your own
plugin. However, only Roblox Studio can use a KeyframeSequence created in such
a way. If you wish to use such a KeyframeSequence, you will need to upload it
to Roblox as described below.
## KeyframeSequence Properties

[`KeyframeSequence.Priority`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence#Priority) and [`KeyframeSequence.Loop`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence#Loop) save the
priority and looped animation settings for the sequence. Note that
[`AnimationTrack`](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) properties can eventually overwrite these properties at
playback time.

The last [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) in the sequence, meaning the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) with
the highest [`Keyframe.Time`](https://create.roblox.com/docs/reference/engine/classes/Keyframe#Time) property, determines the length of an
animation.
## KeyframeSequence Structure

KeyframeSequences act as a container that hold [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe)s. Keyframes
represent a 'key' frame in the animation, that are interpolated between during
playback.

Keyframes contain [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose)s. [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose)s, specific to each
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) being animated, contain the `Datatype.CFrame` applied to the
[`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) connecting two parts. Poses match the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) they
correspond with by name and apply their data to the [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) with this
same-named part identified as [`Motor6D.P1`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#P1) . For this reason, animations
require distinct part names to play correctly.

Poses follow a structure based on joint hierarchy. The parent of each
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) corresponds to the [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) of the part it is attached to. In
practice, this means the poses branch out from the root part. See below for a
visual example.
## Using KeyframeSequences when making animations

You must first upload KeyframeSequences to Roblox before they can be played in
an experience. In Studio, right click on the KeyframeSequence and click 'Save
to Roblox'. Alternatively, you can use the
[`Plugin:SaveSelectedToRoblox()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#SaveSelectedToRoblox) function. Either method will bring up
the animation upload window and allow you to upload your KeyframeSequence as
an animation.

In some cases, you may want to preview an Animation before uploading it to the
Roblox site. You can generate a temporary id using
[`KeyframeSequenceProvider:RegisterKeyframeSequence()`](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequenceProvider#RegisterKeyframeSequence). This will
generate a hash id that can be used for localized animation testing.
## Obtaining KeyframeSequences

In some cases you may wish to download the KeyframeSequence corresponding to
an existing uploaded Animation. You can use
[`AnimationClipProvider:GetAnimationClipAsync()`](https://create.roblox.com/docs/reference/engine/classes/AnimationClipProvider#GetAnimationClipAsync) to download an
animation.