**Note**

Rather than using TextScaled, we recommend you consider using [AutomaticSize](https://developer.roblox.com/en-us/api-reference/property/GuiObject/AutomaticSize), a new method to dynamically size UI that will give you the best visual result possible.

The TextScaled property determines whether text is scaled so that it fills the entire UI element's space. When this is enabled, [TextButton.TextSize](https://developer.roblox.com/en-us/api-reference/property/TextButton/TextSize) is ignored and [TextButton.TextWrapped](https://developer.roblox.com/en-us/api-reference/property/TextButton/TextWrapped) is automatically enabled. This property is useful for text-rendering UI elements within [BillboardGuis](https://developer.roblox.com/en-us/api-reference/class/BillboardGui).

When this property is used for screen-space UI, it may be desirable to use a [UITextSizeConstraint](https://developer.roblox.com/en-us/api-reference/class/UITextSizeConstraint) to restrict the range of possible text sizes.

TextScaled and AutomaticSize
----------------------------

It's recommended that developers avoid usage of TextScaled and adjust UI to take advantage of the AutomaticSize property instead. Here are the core differences between the two properties:

*   TextScaled scales the content (text) to accommodate the UI. Without careful consideration, some text may become unreadable if scaled too small.
*   AutomaticSize resizes the UI to accommodate content.

With AutomaticSize, you're able to adjust your UI to accommodate the content (text) while maintaining a consistent font size. For more information on how to use automatic sizing, see the UI Automatic Size article.

We suggest that you don't apply both TextScaled and AutomaticSize on the same UI object. If you apply both properties:

*   AutomaticSize determines the maximum amount of available space that a [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject) can use (in this case, text)
*   TextScaled uses the available space determined by AutomaticSize, to scale the font size to fit the available space, which will expand up to the maximum font size (100), if there are no size constraints
*   The end result will be: text goes to 100 font size and the UI object will expand to fit that text

Using both AutomaticSize and TextScaled at the same time can result in significant scaling differences than when AutomaticSize is off. Here is an example of an automatically sized TextLabel (with no minimum size) that has TextScaled enabled:

![TextScaled Demo](https://developer.roblox.com/assets/blt09c403ee1409b090/TextScaledDemo.gif)

Note how automatic size changes the TextLabel's size relative to the parent frame's size. Subsequently, as the TextLabel is resized, the TextScaled property scales the text to the maximum amount of space available by the automatically sized TextLabel.