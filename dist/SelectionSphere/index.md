**SelectionSphere** is an object which renders a 3D sphere around its
[Adornee](https://create.roblox.com/docs/reference/engine/classes/PVAdornment#Adornee) when it is a descendant of the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) or
anywhere where GUI objects are rendered. The sphere's geometry consists of a
ring/outline in addition to a surface. By default, only the outline is
visible.

![A default SelectionSphere adorned to a semi-transparent default Part](https://prod.docsiteassets.roblox.com/assets/bltb3e8cdfab0891947/SelectionSphere.jpg)
There are a few properties available to configure the appearance of the
sphere. The outline can modified through the
[Color3](https://create.roblox.com/docs/reference/engine/classes/GuiBase3d#Color3)† and
[Transparency](https://create.roblox.com/docs/reference/engine/classes/GuiBase3d#Transparency)† properties. The surface can
be modified through the [SurfaceColor3](https://create.roblox.com/docs/reference/engine/classes/SelectionSphere#SurfaceColor3) and
[SurfaceTransparency](https://create.roblox.com/docs/reference/engine/classes/SelectionSphere#SurfaceTransparency) properties.
Finally, rendering of the sphere can be toggled with the
[Visible](https://create.roblox.com/docs/reference/engine/classes/GuiBase3d#Visible)† property.

† These properties come from this object's superclass, [GuiBase3d](https://create.roblox.com/docs/reference/engine/classes/GuiBase3d).

The SelectionSphere object does not capture any form of input; it is solely a
visual effect. To capture simple pointer input on the adornee, consider using
a [ClickDetector](https://create.roblox.com/docs/reference/engine/classes/ClickDetector).