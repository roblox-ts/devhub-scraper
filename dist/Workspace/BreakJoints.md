Goes through all [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s given, breaking any joints connected to
these parts.

This function will break any of the following types of joints:

- [`JointInstance`](https://create.roblox.com/docs/reference/engine/classes/JointInstance)s such as `Connectors`, `Welds` and `Snaps`
- [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint)s

Unlike [`Model.MakeJoints`](https://create.roblox.com/docs/reference/engine/classes/Model#MakeJoints), this function requires an array of
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s as a parameter. This array is given as follows:
```lua
workspace:BreakJoints({part1, part2, part3})
```

Note, this function cannot be used by scripts and will only function in
plugins.