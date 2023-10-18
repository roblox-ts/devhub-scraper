Fires when the client lets their focus leave the TextBox - typically when
a client clicks/taps outside of the TextBox. This also fires if a TextBox
forces focus on the user.

It can be used alongside [`TextBox.Focused`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Focused) to track when a TextBox
gains and loses focus.

See also the [`UserInputService.TextBoxFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocused) and
[`UserInputService.TextBoxFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocusReleased) for similar functions that
rely on the UserInputService service.

This event will only fire when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).