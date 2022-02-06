This function is used by _'PopperCam'_ in the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) to ensure obstructions do not come between the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) and the [Camera's](https://developer.roblox.com/en-us/api-reference/class/Camera) subject.

This function will check all [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) and [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) with the following exceptions:

*   Any [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) specified in the _ignoreList_ (including its descendants) will be ignored
*   [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) with [BasePart.CanCollide](https://developer.roblox.com/en-us/api-reference/property/BasePart/CanCollide) set to false are ignored
*   [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) with a [BasePart.Transparency](https://developer.roblox.com/en-us/api-reference/property/BasePart/Transparency) greater than 0.95 will be ignored  
    Water [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) is ignored

Note, as this function requires an _ignoreList_ to run, you should pass an empty table when none is required.