This property indicated the smallest size in pixels the font is allowed to
be. This value defaults to 1 pixel and must be set less than or equal to
[UITextSizeConstraint.MaxTextSize](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint#MaxTextSize).

![Max and min constraints demo][1]

If the affected [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) has its [TextScaled](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled)
property set to true the text size constrained by this property will scale
dynamically with the container's size. It will scale downwards with the
GuiObject's size until the min size is reached, at which point it will
stay constant if the UI element continues to shrink.

[1]: https://prod.docsiteassets.roblox.com/assets/blte9c47efb631349e0/UITextSizeConstraintDemo.gif