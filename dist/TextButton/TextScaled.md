**Note**

Instead of enabling the **TextScaled** property for text objects, it's recommended that developers use [AutomaticSize](https://developer.roblox.com/en-us/api-reference/property/GuiObject/AutomaticSize)

The TextScaled property determines whether text is scaled so that it fills the entire UI element's space. When this is enabled, \`TextButton/TextSize\` is ignored and \`TextButton/TextWrapped\` is automatically enabled. This property is useful for text-rendering UI elements within \`BillboardGuis\`.

When this property is used for screen-space UI, it may be desirable to use a [UITextSizeConstraint](https://developer.roblox.com/en-us/api-reference/class/UITextSizeConstraint) to restrict the range of possible text sizes.