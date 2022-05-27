The [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera)'s FOV must be updated to reflect
[Camera/ViewportSize](https://create.roblox.com/docs/reference/engine/classes/ViewportSize) changes. The value of the
FieldOfViewMode property determines which FOV value will be kept constant.

For example, when the value of FieldOfViewMode is set to
[FieldOfViewMode.Vertical](https://create.roblox.com/docs/reference/engine/classes/FieldOfViewMode#Vertical), the horizontal FOV is updated when the
viewport is resized, while the vertical FOV is kept constant. On the other
hand, if the value is set to [FieldOfViewMode.Diagonal](https://create.roblox.com/docs/reference/engine/classes/FieldOfViewMode#Diagonal), both horizontal
and vertical FOV might be changed to keep the diagonal FOV constant.