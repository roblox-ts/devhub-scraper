**FaceAccessory** is a comma-separated list of asset IDs that determine
what accessories should be added when the description is
[`applied`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription), usually those attached to the
front of its face (such as glasses). The list does not contain duplicates.

An error is thrown if you try to apply a new description which shares any
assets with the existing description but a different accessory property.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`BackAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#BackAccessory),
[`FrontAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#FrontAccessory),
[`HairAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HairAccessory),
[`HatAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HatAccessory),
[`NeckAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#NeckAccessory),
[`ShouldersAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#ShouldersAccessory) and
[`WaistAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#WaistAccessory), which are
similar properties that apply accessories like this one
- [`Face`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#Face), a property that determines what
Face texture is used on the head