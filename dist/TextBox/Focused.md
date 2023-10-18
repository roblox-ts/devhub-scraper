Fires when the [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) gains focus - typically when a client
clicks/taps on a TextBox to begin text entry. This also fires if a TextBox
forces focus on the user.

It can be used alongside [`TextBox.FocusLost`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FocusLost) to track when a TextBox
gains and loses focus.

See also the [`UserInputService.TextBoxFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocused) and
[`UserInputService.TextBoxFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocusReleased) for similar functions that
rely on the UserInputService service.

This event will only fire when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).