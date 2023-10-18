This function removes all [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) worn by the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent. When this function is called, all
[`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) sharing an [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) with the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will be removed. For [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
[`Characters`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) this will remove all hats and other
accessories.

This function removes [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) by calling
[`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) on them. This means the
[`Parents`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) of the accessories are set to *nil* and
locked.

See also:

- To attach an [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) use the [`Humanoid:AddAccessory()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#AddAccessory)
function
- To get all [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) belonging to a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
use the [`Humanoid:GetAccessories()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetAccessories) function