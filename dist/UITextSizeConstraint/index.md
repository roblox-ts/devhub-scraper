A **UITextSizeConstraint** ensures that the size of text rendered by certain
[`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) classes ([`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel), [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton), or
[`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox)) lies within the range described by
[`MaxTextSize`](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint#MaxTextSize) and
[`MinTextSize`](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint#MinTextSize). It is meant to be used
alongside [`TextLabel.TextScaled`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled), which automatically scales text to
fill its containing object. Like other UI constraints, it is applied when
parented to the object to be constrained.

![Constraints visual](https://prod.docsiteassets.roblox.com/assets/legacy/UITextSizeConstraintDemo.gif)

It's recommended that no values lower than 9 be used for
[`MinTextSize`](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint#MinTextSize) property, otherwise text
may not be readable to most users.