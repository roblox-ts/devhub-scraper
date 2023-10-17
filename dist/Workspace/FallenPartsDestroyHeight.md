This property determines the height at which the Roblox engine
automatically removes falling [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and their
ancestor [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) from [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) by parenting them to
`nil`. This is to prevent parts that have fallen off the map from
continuing to fall forever.

If a part removed due to this behavior is the last part in a
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), that model will also be removed. This applies to all model
ancestors of the part.

This property is clamped between -50,000 and 50,000 because
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) do not simulate or render properly at a great
distance from the origin due to floating point inaccuracies.

This property can be read by scripts, but can only be set by plugins, the
command bar, or the properties window in Studio.