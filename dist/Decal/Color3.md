The [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) tint of the [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal).

Developers should note that this property only sets the tint of the decal,
rather than the color. This means, unless the image associated with the
[`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) was originally white (RGB = 1,1,1) then the color cannot be
freely changed using this property.

By reducing the RGB properties of [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) in union, developers
can make a decal darker.