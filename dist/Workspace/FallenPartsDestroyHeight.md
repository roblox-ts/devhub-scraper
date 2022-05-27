This property determines the height at which falling [BaseParts](https://create.roblox.com/docs/reference/engine/classes/BasePart)
(and their ancestor [Models](https://create.roblox.com/docs/reference/engine/classes/Model)) are removed from Workspace.

![Parts being removed at the FallenPartsDestroyHeight][1]

#### What happens to falling parts?

For performance reasons, Roblox automatically parents parts that fall
below this value to `nil`. This is to prevent parts that have fallen off
the map from continuing to fall forever.

If a part removed due to this behavior is the last part in a [Model](https://create.roblox.com/docs/reference/engine/classes/Model), then
that model will also be removed. This applies to all model ancestors of
the part.

This property can be read by scripts, but can only be set by plugins, the
command bar, or the properties window in Studio.

This property is clamped between -50,000 and 50,000. This is because
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s do not simulate or render properly at a great distance from
the origin due to floating point inaccuracies.

[1]: https://prod.docsiteassets.roblox.com/assets/blt3ab195d142a5f6ee/FallenPartsDestroyHeight.gif