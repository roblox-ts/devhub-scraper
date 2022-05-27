A Keyframe holds the [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose)s applied to joints in a [Model](https://create.roblox.com/docs/reference/engine/classes/Model) at a given point
of time in an animation. [Keyframe](https://create.roblox.com/docs/reference/engine/classes/Keyframe)s are interpolated between during animation
playback.

Note, in most cases developers do not need to manipulate [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)s
as the animation editor covers most animation functionality. However, in some
cases a developer may wish to generate an animation from a [Script](https://create.roblox.com/docs/reference/engine/classes/Script) or build
their own plugin.

## Structure

Keyframes are held within a [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence) and contain [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) objects. The
poses are named in accordance with the [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s they correspond to and are
structured in terms of joint hierarchy. This means each [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) is parented to
the [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) corresponding to the part it is attached to. See below for a visual
example.

Note, as [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose)s are named in accordance with the [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s they correspond
to, animations require distinct part names to play correctly.

## Interpolation

During animation playback the poses in different keyframes are interpolated
between. This allows a smooth animation to be created without needing to
define every frame. Note, the style of interpolation is determined in the
[Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) object. The Keyframe object merely holds the [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose)s at a defined point
of time in the animation ([Keyframe.Time](https://create.roblox.com/docs/reference/engine/classes/Keyframe#Time)).