The Offset of a mesh determines the distance from the [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) that the mesh will be displayed.

How to use mesh offset
----------------------

The Offset property changes the relative position the mesh will be rendered at. For example, an offset of 0, 5, 0 will cause the mesh to be displayed 5 studs above the position of the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart).

The position of the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) remains unchanged, meaning the physics collision box of the part will remain in the same location. This is demonstrated in the image below where the green outline (a [SelectionBox](https://developer.roblox.com/en-us/api-reference/class/SelectionBox)) shows the extents of the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart).

![enter image description here](https://developer.roblox.com/assets/bltd3942dca6b981850/OffsetAnim.gif)

Other uses for mesh offset
--------------------------

There are a number of interesting uses for the mesh offset property.

*   Offset and [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale) can be animated using [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService) relatively inexpensively as the engine does not need to make any physics/collision calculations as the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) is not moved.
*   Changing the relationship between the mesh and its collision extents (determined by the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart))