Moves the [`PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) to the given position. If
a primary part has not been specified, the root part of the model will be
used, but the root part is not deterministic and it is recommended that
you always set a primary part when using [`MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Model#MoveTo).

If there are any obstructions where the model is to be moved, such as
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) or other [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart), the model will be
moved vertically upward until there is nothing in the way. If this
behavior is not desired, [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) should be used
instead.

Note that rotation is not preserved when moving a model with
[`MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Model#MoveTo). It is recommended to use either
[`TranslateBy()`](https://create.roblox.com/docs/reference/engine/classes/Model#TranslateBy) or [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo)
if the current rotation of the model needs to be preserved.