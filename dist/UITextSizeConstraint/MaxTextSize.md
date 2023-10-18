this property indicates the largest size in pixels the font is allowed to
be. It defaults to 1000 pixels and much be set larger than or equal to the
[`UITextSizeConstraint's`](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint)
[`MinTextSize`](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint#MinTextSize) property.

![Constraints visual](https://prod.docsiteassets.roblox.com/assets/legacy/UITextSizeConstraintDemo.gif)

If the affected [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) has its
[`TextScaled`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled) property set to true the text size
constrained by this property will scale dynamically with the container's
size. It will scale upwards with the GuiObject's size until the max size
is reached, at which point it will stay constant if the UI element
continues to grow.