This property determines if the [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) will clip (make
invisible) any portion of descendant GUI elements that would otherwise
render outside the bounds of the rectangle. The behavior is similar to a
[`ScrollingFrame`](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame).

Note that [`GuiObject.Rotation`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation) isn't supported by this property. If
this or any ancestor GUI has a **non-zero** [`GuiObject.Rotation`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation),
this property is **ignored** and descendant GUI elements will be rendered
regardless of this property's value.