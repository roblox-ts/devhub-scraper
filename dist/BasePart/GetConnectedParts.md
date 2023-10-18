Returns a table of parts connected to the object by any kind of rigid
joint.

If `recursive` is true this function will return all of the parts in the
assembly rigidly connected to the BasePart.
#### Rigid Joints

When a joint connects two parts together `(Part0 → Part1)`, a joint is
**rigid** if the physics of `Part1` are completely locked down by `Part0`.
This only applies to the following joint types:

- [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld)
- [`Snap`](https://create.roblox.com/docs/reference/engine/classes/Snap)
- [`ManualWeld`](https://create.roblox.com/docs/reference/engine/classes/ManualWeld)
- [`Motor`](https://create.roblox.com/docs/reference/engine/classes/Motor)
- [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D)
- [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint)