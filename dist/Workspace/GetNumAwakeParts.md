Returns the number of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s that are deemed physically active,
due to being recently under the influence of physics.

This function provides a measure of how many [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s are being
influenced by, or recently under the influence of, physical forces.
```lua
print(workspace:GetNumAwakeParts()) -- prints the number of 'awake' parts
```
#### Sleeping vs Awake Parts

In order to ensure good performance, Roblox sets `BaseParts` in which
physics are not being applied to a 'sleeping' state. [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s
with [`BasePart.Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) set to true, for example, will always be
sleeping as physics does not apply to them. When a force is applied to an
non anchored [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), an 'awake' state will be applied. Whilst a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is awake the Roblox physics engine will perform
continuous calculations to ensure physical forces interact correctly with
the part. Once the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is no longer subject to physical
forces, it will revert to a 'sleeping' state.