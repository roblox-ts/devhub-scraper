The TextBoxFocusReleased event fires when a client loses focus on a
TextBox - typically when a client stops text entry into a TextBox by
pressing return or clicking/touching elsewhere on the screen.

For example, the code below prints the name of the TextBox losing focus
when the event fires.
```lua
local UserInputService = game:GetService("UserInputService")

function TextBoxFocusReleased(textbox)
	print(textbox.Name)
end

UserInputService.TextBoxFocusReleased:Connect(TextBoxFocusReleased)
```

It can be used alongside [`UserInputService.TextBoxFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TextBoxFocused) to track
when a TextBox gains and loses focus.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService:GetFocusedTextBox()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetFocusedTextBox)
- [`TextBox.Focused`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Focused)
- [`TextBox.FocusLost`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FocusLost)