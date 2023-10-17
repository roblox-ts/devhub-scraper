The Reflectance property determines how much a [`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
reflects the skybox. A value of 0 indicates the part is not reflective at
all, and a value of 1 indicates the part should fully reflect.

Reflectance is not affected by [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency), unless the
part is fully transparent, in which case reflectance will not render at
all. Reflectance may or may not be ignored depending on the
[`BasePart.Material`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) of the part.