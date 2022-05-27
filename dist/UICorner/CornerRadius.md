A [UDim](https://developer.roblox.com/en-us/api-reference/datatype/UDim) property that determines the radius, in pixels, of
the [UICorner](https://create.roblox.com/docs/reference/engine/classes/UICorner) UIComponent, according to the following formula:

[radius = min(min(rectWidth, rectHeight) . 2, CornerRadius.scale * min(rectWidth, rectHeight) + CornerRadius.offset)](https://create.roblox.com/docs/reference/engine/classes/radius = min(min(rectWidth, rectHeight) # 2, CornerRadius.scale * min(rectWidth, rectHeight) + CornerRadius.offset))

This means that:

1.  The radius of the x-axis is always the same as the radius of y axis.
2.  The scale will always apply to the minimum edge.
3.  Rounded rectangles will always be in a pill shape if CornerRadius is
    set to a value that leads to a calculated result greater than half of
    the rectangles' minimum edge.

It is suggested to always use either scale or offset to define
CornerRadius instead of mixing them up.