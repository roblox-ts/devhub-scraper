This function returns an array of [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) that the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent is currently wearing. All
[`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) objects parented to the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
parent will be included, regardless of if they are attached or not. If the
humanoid is not wearing any accessories, the array will be empty.

If the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) has no [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory) an empty
array will be returned

See also:

- Use [`Humanoid:AddAccessory()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#AddAccessory) to attach an [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) to a
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent