The RotVelocity of a [part](https://developer.roblox.com/en-us/api-reference/class/BasePart) describes how its [BasePart.Orientation](https://developer.roblox.com/en-us/api-reference/property/BasePart/Orientation) is presently changing. In other words, this property describes how the fast part is rotating. The part only rotates if it is not anchored.

The unit of this property is **radians per second**.

Using this in conjunction with [AlignOrientation](https://developer.roblox.com/en-us/api-reference/class/AlignOrientation) allows for aligned parts to have matching RotVelocity and Orientation values.