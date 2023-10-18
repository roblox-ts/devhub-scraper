Bones are non-rendered objects that drive the movement of one or more parts
for the purposes of animation, or creating clothing and characters. Bones are
part of a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) or [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) object's skeletal **rig** that you
typically access and animate through the
[Animation Editor](https://create.roblox.com/docs/animation/editor).

Rigs are created during the modeling process in third-party software such as
Blender or Maya. After importing the rigged model into Studio, you can add the
model directly to your experience, or save and share the model as an asset.
See [Rigging](https://create.roblox.com/docs/art/modeling/rigging) for more details on creating
and using rigged models.

Note that you can parent [`Bones`](https://create.roblox.com/docs/reference/engine/classes/Bone) under other [`Bones`](https://create.roblox.com/docs/reference/engine/classes/Bone) and
parts. When parenting a bone to another bone, the child bone's world position
will be relative to the parent bone's position, and the hierarchy of parented
[`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone) objects can change the behavior of affected parts during posing
or animation.
##### Relationship with Motor6D

To support animations with older rigs using joints, such as [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D),
you can use the [`Bone.Transform`](https://create.roblox.com/docs/reference/engine/classes/Bone#Transform) property in the same way as
[`Motor6D.Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform). Roblox uses the offset of the bones from the
default pose to drive an animation, and bones are not replicated or
serialized.
##### Bone.CFrame

Bones inherit the [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame) property of
[`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) which Roblox uses as the bone's reference
position. The inherited [`WorldCFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldCFrame) and other
world properties return the initial un-transformed position.