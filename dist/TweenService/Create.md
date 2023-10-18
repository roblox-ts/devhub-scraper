The Create function of [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService) creates a new [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween).
The function takes three arguments: the object to tween, the
[`TweenInfo`](https://create.roblox.com/docs/reference/engine/datatypes/TweenInfo) to use, and a table containing the properties to
tween and the values to tween to.

Tweens are used to interpolate the properties of instances. These can be
used to create animations for various Roblox objects. Almost any numeric
property can be tweened using [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService).

The propertyTable parameter that is passed in needs to be a dictionary
where the keys are the string names of the property (e.g. "Position",
"Transparency", "Color", etc), and the value is the value the property
needs to be at the end of the tween. Note that only specific types of
properties can be used with [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService), but multiple properties
can be animated in the same tween. The types of properties that can be
tweened are:

- number
- bool
- [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)
- [`Rect`](https://create.roblox.com/docs/reference/engine/datatypes/Rect)
- [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3)
- [`UDim`](https://create.roblox.com/docs/reference/engine/datatypes/UDim)
- [`UDim2`](https://create.roblox.com/docs/reference/engine/datatypes/UDim2)
- [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2)
- [`Vector2int16`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2int16)
- [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3)

The [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) created using this function is unique to the object
given as the instance parameter. To apply the same tween to another
object, call this function again with the new object.

Details on how the interpolation of the tween is to be carried out are
given in the [`TweenInfo`](https://create.roblox.com/docs/reference/engine/datatypes/TweenInfo) parameter, such as reversing, looping
and easing.