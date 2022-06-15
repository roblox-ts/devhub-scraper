The Create function of [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService) creates a new [Tween](https://developer.roblox.com/en-us/api-reference/class/Tween). The function takes three arguments: the object to tween, the [TweenInfo](https://developer.roblox.com/en-us/api-reference/datatype/TweenInfo) to use, and a table containing the properties to tween and the values to tween to.

Tweens are used to interpolate the properties of instances. These can be used to create animations for various Roblox objects. Almost any numeric property can be tweened using [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService).

The propertyTable parameter that is passed in needs to be a dictionary where the keys are the string names of the property (e.g. “Position”, “Transparency”, “Color”, etc), and the value is the value the property needs to be at the end of the tween. Note that only specific types of properties can be used with [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService), but multiple properties can be animated in the same tween. The types of properties that can be tweened are:

*   number
*   bool
*   `CFrame`
*   `Rect`
*   `Color3`
*   `UDim`
*   `UDim2`
*   `Vector2`
*   `Vector2int16`
*   `Vector3`

The [Tween](https://developer.roblox.com/en-us/api-reference/class/Tween) created using this function is unique to the object given as the instance parameter. To apply the same tween to another object, call this function again with the new object.

Details on how the interpolation of the tween is to be carried out are given in the [TweenInfo](https://developer.roblox.com/en-us/api-reference/datatype/TweenInfo) parameter, such as reversing, looping and easing.