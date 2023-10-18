A reference to a designated [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) Instance that sends messages
on behalf of the user. This property only accepts TextBox instances.

You can use it to further integrate your custom chat input bar UI into
your experience by freely manipulating appearance, location, and layout.
When opting to set this property to a custom TextBox, you don't need to
write any code for the following behavior:

- When a user types a message and presses [`Enum.KeyCode`](https://create.roblox.com/docs/reference/engine/enums/KeyCode), the
message will be sent to
[`ChatInputBarConfiguration.TargetTextChannel`](https://create.roblox.com/docs/reference/engine/classes/ChatInputBarConfiguration#TargetTextChannel).
- When a message is sent, [`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) will automatically clear.

For security, some limitations are imposed on the TextBox when it is
promoted to [`ChatInputBarConfiguration.TextBox`](https://create.roblox.com/docs/reference/engine/classes/ChatInputBarConfiguration#TextBox). Lua code will not
be able to:

- Change the [`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) property.
- Use the [`TextBox.CaptureFocus`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CaptureFocus) or [`TextBox.ReleaseFocus`](https://create.roblox.com/docs/reference/engine/classes/TextBox#ReleaseFocus)
methods.