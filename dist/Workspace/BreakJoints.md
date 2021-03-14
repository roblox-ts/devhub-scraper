Goes through all [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s given, breaking any joints connected to these parts.

This function will break any of the following types of joints:

*   [JointInstance](https://developer.roblox.com/en-us/api-reference/class/JointInstance)s such as `Connectors`, `Welds` and `Snaps`
*   [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint)s

Unlike `Break/MakeJoints`, this function requires an array of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s as a parameter. This array is given as follows:

workspace:BreakJoints({part1, part2, part3})

Note, this function cannot be used by scripts and will only function in plugins.