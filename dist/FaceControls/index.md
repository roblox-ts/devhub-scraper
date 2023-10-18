The [`FaceControls`](https://create.roblox.com/docs/reference/engine/classes/FaceControls) object defines a set of properties for controlling
the facial expressions of a character head capable of animation.

The FaceControls properties are based on the Facial Action Coding System
(FACS), a comprehensive system for describing all visually discernible facial
movement based on anatomy. [`FaceControls`](https://create.roblox.com/docs/reference/engine/classes/FaceControls) properties can only be set
between 0 and 1. Different combinations of the [`FaceControls`](https://create.roblox.com/docs/reference/engine/classes/FaceControls) property
values create different facial expressions. Recording multiple facial
expressions over time creates facial animation.
## What is an Animatable Head?

An animatable head is a [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) that implements a facial rig and is
capable of playing facial animations and triggering facial expressions. A
[`FaceControls`](https://create.roblox.com/docs/reference/engine/classes/FaceControls) object that is a child of a head [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) can
change the facial expressions of the head.

A head consists of the following three components:

- Skinned MeshPart instance for the head geometry with an internal rig that
deforms this skinned MeshPart
- FaceControls instance that drives the internal rig when properties such as
FaceControls.JawDrop are changed.
- Cage [`WrapTarget`](https://create.roblox.com/docs/reference/engine/classes/WrapTarget) instance for tight fitting facial accessories

In a third-party modeling tool, such as Blender or Maya, an artist can create
a joint-driven facial rig, pose the joints to match each of the individual
FACS controls, and save as an FBX. When a head `.FBX` is imported in Studio, a
facs-to-joint mapping is created. This mapping deforms the mesh geometry when
FaceControls properties are changed. The mapping and the facial rig (including
[`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone) instances) are not exposed to developers and can only be accessed
through the FaceControls instance. The [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) for a Dynamic Head
looks and behaves the same as a regular [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) except when a
FaceControls instance is a child of the MeshPart. Editing the properties of
the FaceControls deforms the MeshPart's geometry. These properties are
available to animate in the Animation Editor.

See [Facial Animation](https://create.roblox.com/docs/art/characters/facial-animation) for
more information on usage and creation of a animatable head.
## Animatable Heads in the Marketplace

If you are publishing your head to the Marketplace, your head asset must
include a minimum subset of face controls. Roblox's publishing validation
rejects assets without the following required poses:

- EyesLookDown
- EyesLookLeft
- EyesLookRight
- EyesLookUp
- JawDrop
- LeftEyeClosed
- LeftLipCornerPuller
- LeftLipStretcher
- LeftLowerLipDepressor
- LeftUpperLipRaiser
- LipsTogether
- Pucker
- RightEyeClosed
- RightLipCornerPuller
- RightLipStretcher
- RightLowerLipDepressor
- RightUpperLipRaiser

See
[FACS pose reference](https://create.roblox.com/docs/art/characters/facial-animation/facs-poses-reference)
for more information on usage and creation of a animatable head.