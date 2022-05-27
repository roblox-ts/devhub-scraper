Points to the primary part of the [Model](https://create.roblox.com/docs/reference/engine/classes/Model). The primary part is the
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) that acts as the physical reference for the pivot of the model.
That is, when parts within the model are moved due to physical simulation
or other means, the pivot will move in sync with the primary part. If the
primary part is **not** set, the pivot will remain at the same location in
world space even if parts within the model are moved.

Note that when setting this property, it must be a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) that is a
descendant of the model. If you try to set [Model.PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) to a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) that is **not** a descendant of the model, it will be set to
that part but reset to `nil` during the next simulation step — this
is legacy behavior to support scripts which assume they can temporarily
set the primary part to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) which isn't a descendant of the
model.

The general rule for models is that:

- Models whose parts are joined together via physical joints such as
  [WeldConstraints](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint) or [Motor6Ds](https://create.roblox.com/docs/reference/engine/classes/Motor6D) should have a
  primary part assigned. For example, Roblox character models have their
  [Model.PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) set to the **HumanoidRootPart** by default.
- Static (usually [Anchored](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored)) models which stay in one
  place unless a script explicitly moves them don't require a
  [Model.PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) and tend not to benefit from having one set.