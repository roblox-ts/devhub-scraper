An object that holds two parts together. It is commonly created when the _Join Always_ setting in Studio is turned on.

Functions identically to [Weld](https://developer.roblox.com/en-us/api-reference/class/Weld).

See also [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) for a newer alternative using the [constraints](https://developer.roblox.com/en-us/articles/constraints) system that does not require [C0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C0) or [C1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C1) properties to be manually set.

Root part
---------

Every Assembly has a root part, see [BasePart:GetRootPart](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetRootPart). When a ManualWeld's [C0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C0)/[C1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/C1) is modified the root part will stay where it was.

Directionality
--------------

ManualWelds do not have any directionality. [Part0](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Part0) or [Part1](https://developer.roblox.com/en-us/api-reference/property/JointInstance/Part1), doesn't matter. You can imagine rigid joints forming a tree branching down from the root part. All the parts down the tree from root will move, and their welded “children” in this tree will move with them.