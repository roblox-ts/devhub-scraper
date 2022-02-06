The **Offset** of a [UIGradient](https://developer.roblox.com/en-us/api-reference/class/UIGradient) determines the scalar translation of the gradient from the center of the parent [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject). This value is a scalar translation, meaning that the actual pixel offset is determined by the [AbsoluteSize](https://developer.roblox.com/en-us/api-reference/property/GuiBase2d/AbsoluteSize) of the parent GuiObject. So, a value of (1, 0) would shift the gradient horizontally to the right by a distance equal to the parent GuiObject's on screen-size. Depending on the [Rotation](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Rotation), this may cause the gradient to be partially visible or not visible at all.

![An animation of a UIGradient's Offset being animated on the X axis from -1 to 1.](https://developer.roblox.com/assets/bltbcd2bb515ae0206d/UIGradient.Offset.gif)

In the animation above, the offset of a UIGradient is animated back and forth between the values (-1, 0) and (1, 0). The red dot indicates the start of the gradient, and the blue dot indicates the end. Note how the distance animated is twice that of the frame's width, as the offset is scalar.

See Also
--------

*   [Applying UIGradients](https://developer.roblox.com/en-us/articles/Applying-UIGradients), for more information on creating UIGradient objects and how they work.
    
*   [UIGradient.Rotation](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Rotation), which also affects the geometry of the applied gradient