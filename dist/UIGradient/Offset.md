The **Offset** of a [`UIGradient`](https://create.roblox.com/docs/reference/engine/classes/UIGradient) determines the scalar translation
of the gradient from the center of the parent [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject). This
value is a scalar translation, meaning that the actual pixel offset is
determined by the [`AbsoluteSize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize) of the
parent GuiObject. So, a value of (1, 0) would shift the gradient
horizontally to the right by a distance equal to the parent GuiObject's on
screen-size. Depending on the [`Rotation`](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation), this
may cause the gradient to be partially visible or not visible at all.

![An animation of a UIGradient's Offset being animated on the X axis from -1 to 1.](https://prod.docsiteassets.roblox.com/assets/legacy/UIGradient.Offset.gif)

In the animation above, the offset of a UIGradient is animated back and
forth between the values (-1, 0) and (1, 0). The red dot indicates the
start of the gradient, and the blue dot indicates the end. Note how the
distance animated is twice that of the frame's width, as the offset is
scalar.

Also see [`UIGradient.Rotation`](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation), which also affects the geometry of
the applied gradient.