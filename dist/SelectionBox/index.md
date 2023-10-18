**SelectionBox** is an object which renders a 3D box around its
[`Adornee`](https://create.roblox.com/docs/reference/engine/classes/PVAdornment#Adornee) when it is a descendant of the
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) or anywhere where GUI objects are rendered. The box's
geometry consists of rectangular prisms forming an outline/wireframe in
addition to a surface for each of its faces. By default, only the outline is
visible.
![A default SelectionBox adorned to a default Part](https://prod.docsiteassets.roblox.com/assets/legacy/SelectionBox.jpg)
There are several properties available to configure the appearance of the
cube. The outline can modified through the
`Class.GuiBase3d.Color3|Color3`†,
`Class.GuiBase3d.Transparency|Transparency`† and
`Class.SelectionBox.LineThickness|LineThickness` properties. The faces can be
modified through the `Class.SelectionBox.SurfaceColor3|SurfaceColor3` and
`Class.SelectionBox.SurfaceTransparency|SurfaceTransparency` properties.
Finally, rendering of the box can be toggled with the
`Class.GuiBase3d.Visible|Visible`† property.

† These properties come from this object's superclass,
[`GuiBase3d`](https://create.roblox.com/docs/reference/engine/classes/GuiBase3d).

The SelectionBox object does not capture any form of input; it is solely a
visual effect. To capture simple pointer input on the adornee, consider using
a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector).