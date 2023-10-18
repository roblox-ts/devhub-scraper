This function unequips any [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) currently equipped by the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)

The unequipped [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) will be parented to the [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack) of
the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) associated with the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

If no [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) is equipped, this function will do nothing.

Although [`Tools`](https://create.roblox.com/docs/reference/engine/classes/Tool) can be equipped by NPCs (Non Player
Characters), this function only works on [`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) with a
corresponding [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player). This is because a [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack) object is
required to parent the unequipped [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) to.

See also:

- To instead equip a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool), use [`Humanoid:EquipTool()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#EquipTool)