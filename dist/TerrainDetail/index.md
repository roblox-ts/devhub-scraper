TerrainDetail has to be a child of a [MaterialVariant](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant) object.
The [MaterialVariant.BaseMaterial](https://create.roblox.com/docs/reference/engine/classes/MaterialVariant#BaseMaterial) property of the parent MaterialVariant
object need to be one of the supported terrain Material, for example, it can
be Basalt but not Plastic.

Terrain renders with different textures for it's top(+y), bottom(-y), and
side(horizontal to y axis) faces. If a MaterialVariant has no TerrainDetail
children, all faces are rendered as MaterialVariant specified. At most 3
TerrainDetail objects can be added to MaterialVariant, one for each face.
TerrainDetail overrides the terrain appearance of a certain face.

For example, it can achieve this kind of effect: the top surface of Grass has
lots of grass. On side surfaces, there are less grass. On bottom surfaces
there are no grass.