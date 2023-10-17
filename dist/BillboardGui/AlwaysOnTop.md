Determines whether the BillboardGui will render over top of 3D content, or
be occluded by it.

When set to false, the BillboardGui will render like other 3D content, and
will be occluded by other 3D objects.

When set to true, it always renders on top of 3D content, and the
appearance changes significantly:

- Colors match how they appear inside a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui).
- Text may appear sharper on high DPI devices.
- [`BillboardGui.LightInfluence`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#LightInfluence) is treated as though it was 0.
- [`BillboardGui.Brightness`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Brightness) has no effect.