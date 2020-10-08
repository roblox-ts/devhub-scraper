Returns the number of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s that are deemed physically active, due to being recently under the influence of physics.

This function provides a measure of how many [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s are being influenced by, or recently under the influence of, physical forces.

```Lua
print(workspace:GetNumAwakeParts()) -- prints the number of 'awake' parts
``` 

Sleeping vs Awake Parts
-----------------------

In order to ensure good performance, Roblox sets `BaseParts` in which physics are not being applied to a 'sleeping' state. [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s with [BasePart.Anchored](https://developer.roblox.com/en-us/api-reference/property/BasePart/Anchored) set to true, for example, will always be sleeping as physics does not apply to them. When a force is applied to an non anchored [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), an 'awake' state will be applied. Whilst a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) is awake the Roblox physics engine will perform continuous calculations to ensure physical forces interact correctly with the part. Once the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) is no longer subject to physical forces, it will revert to a 'sleeping' state.