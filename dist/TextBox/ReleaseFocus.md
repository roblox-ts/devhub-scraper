Forces the client to unfocus the TextBox. The `submitted` parameter allows
you to over-ride the `enterPressed` parameter in the
[`TextBox.FocusLost`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FocusLost) event.

This item should be used with a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) in order to work as
expected in online mode.

The code shown below will force the client to unfocus the 'TextBox' 5
seconds after it's selected:
```lua
local TextBox = script.Parent
TextBox.Focused:Connect(function()
	wait(5)
	TextBox:ReleaseFocus()
end)
```

Please be aware that the above example assumes that it's in a LocalScript,
as a child of a TextBox.