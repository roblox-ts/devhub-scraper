This property determines the number of degrees by which a
[`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) is rotated. Rotation is relative to the **center**
of its parent GUI.

A GUI's [`GuiObject.AnchorPoint`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AnchorPoint) does not influence it's rotation.
This means that you cannot change the center of rotation since it will
always be in the center of the object.

Additionally, this property is **not compatible** with
[`GuiObject.ClipsDescendants`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ClipsDescendants). If an ancestor (parent) object has
ClipsDescendants enabled and this property is nonzero, then descendant GUI
elements will not be clipped.