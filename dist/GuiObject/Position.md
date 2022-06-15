This property determines a [GUI's](https://developer.roblox.com/en-us/api-reference/class/GuiObject) pixel and scalar size using a `UDim2`. Its value can be expressed as `UDim2.new(ScalarX, PixelX, ScalarY, PixelY)` or `({ScalarX, PixelX}, {ScalarY, PixelY})`. Position is centered around a GUI's [GuiObject.AnchorPoint](https://developer.roblox.com/en-us/api-reference/property/GuiObject/AnchorPoint).

An element's position can also be set by modifying both its scalar and pixel positions at the same time. For instance, its position can be set to `({0.25, 100}, {0.25, 100})`.

The scalar position is relative to the size of the parent GUI element. For example, if AnchorPoint is set to `0, 0` and Position is set to `{0, 0}, {0, 0}`, the element's top left corner renders at the top left corner of the parent element. Similarly, if AnchorPoint is set to `0, 0` and Position is set to `{0.5, 0}, {0.5, 0}`, the element's top left corner will render at the direct center of the parent element.

The pixel portions of the `UDim2` value are the same regardless of the parent GUI's size. The values represent the position of the object in pixels. For example, if set to `{0, 100}, {0, 150}` the element's AnchorPoint will render with on the screen 100 pixels from the left and 150 pixels from the top.

An object's actual pixel position can be read from the [GuiBase2d.AbsolutePosition](https://developer.roblox.com/en-us/api-reference/property/GuiBase2d/AbsolutePosition) property.