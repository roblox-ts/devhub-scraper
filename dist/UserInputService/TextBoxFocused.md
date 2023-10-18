The TextBoxFocused event fires when a gains focus on a [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) -
typically when a client clicks/taps on a text box to begin inputting text.
This also fires if a text box focus is focused using
[`TextBox:CaptureFocus()`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CaptureFocus).

For example, the code below prints the name of the TextBox focused when
the event fires.
```lua
local UserInputService = game:GetService("UserInputService")

function TextBoxFocused(textbox)
	print(textbox.Name)
end)

UserInputService.TextBoxFocused:Connect(TextBoxFocused)
```

It can be used alongside [`UserInputService.FocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#FocusReleased) to track
when a text box gains and loses focus.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService:GetFocusedTextBox()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetFocusedTextBox)
- [`TextBox.Focused`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Focused)
- [`TextBox.FocusLost`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FocusLost)