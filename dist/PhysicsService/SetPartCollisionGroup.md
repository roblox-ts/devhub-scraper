The SetPartCollisionGroup function sets the collision group of the specified part to the group with the specified name.

This function is equivalent to setting the [BasePart.CollisionGroupId](https://developer.roblox.com/en-us/api-reference/property/BasePart/CollisionGroupId), although this function is the recommended method of configuring a part's collision group.

Note that for a part to respect its collision filter setting it must have its [BasePart.CanCollide](https://developer.roblox.com/en-us/api-reference/property/BasePart/CanCollide) property set to true.

This function will throw a runtime error in the following circumstances:

*   The part parameter is not a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) instance.
*   The specified group does not exist.