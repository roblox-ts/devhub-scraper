This function returns the [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) the client is currently focused
on. A TextBox can be manually selected by the user, or selection can be
forced using the [`TextBox:CaptureFocus()`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CaptureFocus) function. If no TextBox is
selected, this function will return *nil*.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService.TextBoxFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocused)
- [`UserInputService.TextBoxFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocusReleased)
- [`TextBox:CaptureFocus()`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CaptureFocus)
- [`TextBox:IsFocused()`](https://create.roblox.com/docs/reference/engine/classes/TextBox#IsFocused)
- [`TextBox:ReleaseFocus()`](https://create.roblox.com/docs/reference/engine/classes/TextBox#ReleaseFocus)