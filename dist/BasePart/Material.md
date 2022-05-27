The Material property allows a builder to set a part's texture and default
physical properties (in the case that [BasePart.CustomPhysicalProperties](https://create.roblox.com/docs/reference/engine/classes/BasePart#CustomPhysicalProperties)
is unset). The default Plastic material has a very light texture, and the
SmoothPlastic material has no texture at all. Some material textures like
DiamondPlate and Granite have very visible textures. Each material's
texture reflects sunlight differently, especially Foil.

Setting this property then enabling [BasePart.CustomPhysicalProperties](https://create.roblox.com/docs/reference/engine/classes/BasePart#CustomPhysicalProperties)
will use the default physical properties of a material. For instance,
DiamondPlate is a very dense material while Wood is very light. A part's
density determines whether it will float in terrain water.

The Glass material changes rendering behavior on moderate graphics
settings. It applies a bit of reflectiveness (similar to
[BasePart.Reflectance](https://create.roblox.com/docs/reference/engine/classes/BasePart#Reflectance)) and perspective distortion. The effect is
especially pronounced on sphere-shaped parts (set [BasePart.Shape](https://create.roblox.com/docs/reference/engine/classes/BasePart#Shape) to
Ball). Semitransparent objects and Glass parts behind Glass are not
visible.