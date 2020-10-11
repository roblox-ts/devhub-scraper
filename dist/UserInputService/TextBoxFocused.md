The TextBoxFocused event fires when a gains focus on a [TextBox](https://developer.roblox.com/en-us/api-reference/class/TextBox) - typically when a client clicks/taps on a text box to begin inputting text. This also fires if a text box focus is focused using [TextBox:CaptureFocus](https://developer.roblox.com/en-us/api-reference/function/TextBox/CaptureFocus).

For example, the code below prints the the name of the TextBox focused when the event fires.

```lua
local UserInputService = game:GetService("UserInputService")

function TextBoxFocused(textbox)
    print(textbox.Name)
end)

UserInputService.TextBoxFocused:Connect(TextBoxFocused)
``` 

It can be used alongside `UserInputService/FocusReleased` to track when a text box gains and loses focus.

As this event only fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See also
--------

*   [UserInputService:GetFocusedTextBox](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetFocusedTextBox)
*   [TextBox.Focused](https://developer.roblox.com/en-us/api-reference/event/TextBox/Focused)
*   [TextBox.FocusLost](https://developer.roblox.com/en-us/api-reference/event/TextBox/FocusLost)