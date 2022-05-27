A NumberPose holds the value applied to a specific FACS control. The control
which is affected depends on the name of the NumberPose.

NumberPoses are the building blocks of facial animation and, with [Keyframe](https://create.roblox.com/docs/reference/engine/classes/Keyframe)s,
make up [KeyframeSequence](https://create.roblox.com/docs/reference/engine/classes/KeyframeSequence)s.

## NumberPoses and Facial Animation

Although a NumberPose is assigned to a single FACS control by name, that
control can in turn affect multiple bones of the face rig. FACS controls act
as an abstraction layer between facial muscle movements and how they are
defined in the rig.

## NumberPose and hierarchy

Contrary to [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) Instances, [NumberPose](https://create.roblox.com/docs/reference/engine/classes/NumberPose)s cannot be parented together.
However, they all must be stored in a [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) named 'FaceControls' that is a
child of the 'Head' [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose).

## NumberPose value

The Roblox animation system applies `NumberPose.Value`s to the corresponding
FACS controls. Because those controls only respond to values between 0 and 1,
the values calculated by the animation system are always clamped to that
range.