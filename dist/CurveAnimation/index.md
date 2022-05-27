CurveAnimation is a subtype of [AnimationClip](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) consumed by Roblox's animation
system. It stores animation data for each animated channel in a Rig as a
separate, individual curve. For example, CurveAnimation stores the Position
channel for an articulated joint as [Vector3Curve](https://create.roblox.com/docs/reference/engine/classes/Vector3Curve), and it might store the
Rotation channel as an [EulerRotationCurve](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve) or a [RotationCurve](https://create.roblox.com/docs/reference/engine/classes/RotationCurve).

## CurveAnimation structure

CurveAnimation stores curves in a hierarchical manner, matching the hierarchy
of the structure of [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D)s or [Bone](https://create.roblox.com/docs/reference/engine/classes/Bone)s in the animated model. Under each
CurveAnimation instance lies a hierarchy of [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) instances representing
animated joints in the model. Under each such folder instance, several
possible instances may exist. An instance named 'Position' of type
[Vector3Curve](https://create.roblox.com/docs/reference/engine/classes/Vector3Curve) can drive the local translation of the [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D) or [Bone](https://create.roblox.com/docs/reference/engine/classes/Bone) on
the animated model. Similarly, an instance named 'Rotation', of type either
[EulerRotationCurve](https://create.roblox.com/docs/reference/engine/classes/EulerRotationCurve) or [RotationCurve](https://create.roblox.com/docs/reference/engine/classes/RotationCurve) can drive the local rotation of the
[Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D) or [Bone](https://create.roblox.com/docs/reference/engine/classes/Bone) on the animated model.

## Partial matching of hierarchy

You can match partial hierarchies to a model when playing a CurveAnimation in
Roblox's animation system. This means that not all joints need to be present
in the hierarchy for the joints that are present to apply properly.
Furthermore, you can match hierarchies in a 'relative' manner. For example, a
CurveAnimation's first [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) instance root can be `UpperTorso`, and the
animation system matches that to any existing sub-hierarchies in the model.

## Animating miscellaneous channels

Curve Animations can also animate other numerical values in a model. For
example, you can animate FACS controls for facial animations by creating a
folder under the CurveAnimation instance named after an existing
[FaceControls](https://create.roblox.com/docs/reference/engine/classes/FaceControls) instance in the model. Then, to animate individual facial
controllers, you can store individual [FloatCurve](https://create.roblox.com/docs/reference/engine/classes/FloatCurve)s instances named after the
animated [FaceControls](https://create.roblox.com/docs/reference/engine/classes/FaceControls) property.

## Using CurveAnimation when making animations

As for other AnimationClip types (such as [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)), you must upload
CurveAnimations to Roblox first before playing them. To do that, right click
on the CurveAnimation and click 'Save to Roblox'. Alternatively, use
`Plugin:SaveSelectedToRoblox` to bring up the animation upload window.

If you want to preview an Animation before uploading it to the Roblox site,
you can generate a temporary id using
`AnimationClipProviderProvider:RegisterAnimationClip`. This generates a hash
id that you can use for localized animation testing.

## Obtaining CurveAnimations

As for other [AnimationClip](https://create.roblox.com/docs/reference/engine/classes/AnimationClip) types (such as [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)), if you want
to download the CurveAnimation corresponding to an existing uploaded Animation
using Lua scripts, use AnimationClipProvider:AnimationClipAsync.