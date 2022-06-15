The **Rotation** determines the **clockwise** rotation in degrees of the [UIGradient](https://developer.roblox.com/en-us/api-reference/class/UIGradient) starting from left to right. The beginning and end control points snap to the edges of the parent GuiObject, but maintain the provided rotation.

![An animation of a UIGradient's Rotation being animated from 0 to 360](https://developer.roblox.com/assets/blt83863eeda790ba34/UIGradient.Rotation.gif)

The animation above shows the snapping behavior of the gradient control points. The red indicates the start point, and the blue indicates the end. Although the control points do not move at a constant pace, the angle between them changes at a constant pace.

See Also
--------

*   [Applying UIGradients](https://developer.roblox.com/en-us/articles/applying-uigradients), for more information on creating UIGradient objects and how they work.
    
*   [UIGradient.Offset](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Offset), which also affects the geometry of the applied gradient