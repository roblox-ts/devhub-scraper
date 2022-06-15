An object used to hold two objects together in a relative position, regardless of whether they're touching. This object is placed inside of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) and the [Part1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Part1) property determines which other part should be welded to the original part. Two [CFrames](https://developer.roblox.com/en-us/api-reference/datatype/CFrame), [C0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C0) and [C1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C1), then determine how the parts should be placed.

See also [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) for a newer alternative using the [constraints](https://developer.roblox.com/en-us/articles/constraints) system that does not require [C0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C0) or [C1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C1) properties to be manually set.

While the weld is [Active](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Active), it maintains the part positions such that:  
`part1.CFrame * C1 == Part0.CFrame * C0`

Root part
---------

Every Assembly has a root part, see [BasePart:GetRootPart](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetRootPart). When a Weld's [C0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C0)/[C1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C1) is modified the root part will stay where it was.

Directionality
--------------

Welds do not have any directionality. [Part0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Part0) or [Part1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Part1), doesn't matter. You can imagine rigid joints forming a tree branching down from the root part. All the parts down the tree from root will move, and their welded “children” in this tree will move with them.