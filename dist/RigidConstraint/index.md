**RigidConstraint** connects two [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) or
[`Bones`](https://create.roblox.com/docs/reference/engine/classes/Bone) and ensures they stay in the same relative
position/orientation to each other. This flexibility gives it additional
functionality beyond [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), such as attaching accessories to
[`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) on a character rig.

The fastest way to create this constraint is by selecting
**Rigid Constraint** through Studio's **Create** menu in the
[Model](https://create.roblox.com/docs/studio/model-tab) tab.

![Constraint picker indicated in Studio toolbar](https://prod.docsiteassets.roblox.com/assets/studio/general/Model-Tab-Constraints-Create-Menu.png)

Note that this tool behaves differently depending on whether you click on
existing [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart), [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment), or
[`Bones`](https://create.roblox.com/docs/reference/engine/classes/Bone) after the tool is activated:

- Clicking on an existing [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) creates a new [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)
upon it as the intended [`RigidConstraint.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/RigidConstraint#Attachment0) or
[`RigidConstraint.Attachment1`](https://create.roblox.com/docs/reference/engine/classes/RigidConstraint#Attachment1).
- Clicking on an existing [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) or [`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone) uses that
instance as the intended [`RigidConstraint.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/RigidConstraint#Attachment0) or
[`RigidConstraint.Attachment1`](https://create.roblox.com/docs/reference/engine/classes/RigidConstraint#Attachment1).

Following the second valid click, a new [`RigidConstraint`](https://create.roblox.com/docs/reference/engine/classes/RigidConstraint) is created to
connect the two new attachments. If either the first or second click is
**not** made on a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), or [`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone), the
workflow is canceled and no constraint is created.