This function has been superseded by [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) which
acts as a more performant replacement and does not change your code's
behavior. Use [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) for new work and migrate your
existing [`Model:SetPrimaryPartCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Model#SetPrimaryPartCFrame) calls when convenient.

Sets the [`BasePart.CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) of the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model)'s
[`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart). All other parts in the model will also be moved
and will maintain their orientation and offset respective to the
[`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart).

Note, this function will throw an error if no [`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart)
exists for the model. This can cause issues if, for example, the primary
part was never set or has been destroyed.