A UIComponent that will apply deformation to shapes of corners of its parent [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject).  
Input, but not descendants, will be clipped to the round corner area.

![ImageLabel with rounded corners | Image Credit: 0Techy](https://developer.roblox.com/assets/blta27795a3c2bf8f9d/RoundedImage.jpg)

Using the component
-------------------

To use the UICorner UIComponent:

1.  Create a [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame) / [ImageLabel](https://developer.roblox.com/en-us/api-reference/class/ImageLabel) / [ImageButton](https://developer.roblox.com/en-us/api-reference/class/ImageButton) / [TextLabel](https://developer.roblox.com/en-us/api-reference/class/TextLabel) / [TextButton](https://developer.roblox.com/en-us/api-reference/class/TextButton) / [ViewportFrame](https://developer.roblox.com/en-us/api-reference/class/ViewportFrame)
2.  Insert a UICorner component as its child
3.  Adjust the round corner radius by changing the [CornerRadius](https://developer.roblox.com/en-us/api-reference/property/UICorner/CornerRadius) property

UICorner vs 9-slices
--------------------

Alternatively, rounded backgrounds can be accomplished using 9-slices. As a result, it is helpful to understand the pros and cons of UICorner and 9-slices:

### UICorner

*   Pros
*   Can be used to round [ViewportFrames](https://developer.roblox.com/en-us/api-reference/class/ViewportFrame) and image assets
*   Allows for a scriptable and dynamic corner radius
*   Cons
*   There is a performance overhead (Screen Space specifically) as it needs extra processing on each pixel, while 9-slice only involves simple sampling

### 9-slices

*   Pros
*   Suitable for highly decorative borders that are not just rounded
*   If you have a lot of rounded rectangles with solid colors and you pay special attention to low-end devices, using 9-slice may be more performance efficient
*   Cons
*   Hard to apply to existing image assets
*   Different corner sizes require different assets

How the corner radius is calculated internally
----------------------------------------------

In order to keep the circular shape of round corners with the UDim CornerRadius value, the round corner radius internally will be calculated as follows:

_radius = min(min(rectWidth, rectHeight) / 2, CornerRadius.scale \* min(rectWidth, rectHeight) + CornerRadius.offset)_

This means that:

1.  The radius of the x-axis is always the same as the radius of y axis.
2.  The scale will always apply to the minimum edge.
3.  Rounded rectangles will always be in a pill shape if CornerRadius is set to a value that leads to a calculated result greater than half of the rectangles' minimum edge.

It is suggested to always use either scale or offset to define CornerRadius instead of mixing them up.