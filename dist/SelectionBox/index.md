**SelectionBox** is an object which renders a 3D box around its [Adornee](https://developer.roblox.com/en-us/api-reference/property/PVAdornment/Adornee) when it is a descendant of the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) or anywhere where GUI objects are rendered. The box's geometry consists of rectangular prisms forming an outline/wireframe in addition to a surface for each of its faces. By default, only the outline is visible.

![A default SelectionBox adorned to a default Part](https://developer.roblox.com/assets/blta4e1984798842acd/SelectionBox.jpg) There are several properties available to configure the appearance of the cube. The outline can modified through the [Color3](https://developer.roblox.com/en-us/api-reference/property/GuiBase3d/Color3)†, [Transparency](https://developer.roblox.com/en-us/api-reference/property/GuiBase3d/Transparency)† and [LineThickness](https://developer.roblox.com/en-us/api-reference/property/SelectionBox/LineThickness) properties. The faces can be modified through the [SurfaceColor3](https://developer.roblox.com/en-us/api-reference/property/SelectionBox/SurfaceColor3) and [SurfaceTransparency](https://developer.roblox.com/en-us/api-reference/property/SelectionBox/SurfaceTransparency) properties. Finally, rendering of the box can be toggled with the [Visible](https://developer.roblox.com/en-us/api-reference/property/GuiBase3d/Visible)† property.

† These properties come from this object's superclass, [GuiBase3d](https://developer.roblox.com/en-us/api-reference/class/GuiBase3d).

The SelectionBox object does not capture any form of input; it is solely a visual effect. To capture simple pointer input on the adornee, consider using a [ClickDetector](https://developer.roblox.com/en-us/api-reference/class/ClickDetector).

See also
--------

*   [Selection Boxes](https://developer.roblox.com/en-us/articles/selection-boxes), to learn more about using this object