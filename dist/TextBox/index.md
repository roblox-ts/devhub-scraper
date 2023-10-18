![A TextBox being clicked on and typed into in Roblox Studio](https://prod.docsiteassets.roblox.com/assets/legacy/TextBox.gif)

A **TextBox** allows the player to provide text input. It behaves similarly to
a [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton), except that a single TextBox can be put in focus by
clicking, tapping or gamepad selection. While in focus, the player can use a
keyboard to change the [`Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) property.

- If there is no text, the [`PlaceholderText`](https://create.roblox.com/docs/reference/engine/classes/TextBox#PlaceholderText)
will be visible. This is useful prompting players of the kind or format of
data they should input.
- By default, the [`ClearTextOnFocus`](https://create.roblox.com/docs/reference/engine/classes/TextBox#ClearTextOnFocus) property
is enabled and ensures there is no existing text when a TextBox is focused.
This may not be desirable for text that should be editable by the player.
- The [`MultiLine`](https://create.roblox.com/docs/reference/engine/classes/TextBox#MultiLine) property allows players to enter
multiple lines of text with newline characters (`\n`).

The [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService) honors TextBox keybinds and will
automatically prevent key press events from being passed to actions bound with
[`ContextActionService:BindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction). [`UserInputService.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan)
and related events will still fire while a TextBox is in focus.
## Focus State

It is possible to detect and change the focus state of a TextBox:

- You can use [`CaptureFocus`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CaptureFocus) when a dialogue
appears so that the player doesn't have to click on a TextBox when it
becomes available; you can use [`ContextActionService:BindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) to
bind a certain key to focus a TextBox using this function. When a TextBox
comes into focus, the [`Focused`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Focused) event fires.
- You can detect if a certain TextBox is in focus by using
[`IsFocused`](https://create.roblox.com/docs/reference/engine/classes/TextBox#IsFocused). Alternatively,
[`UserInputService:GetFocusedTextBox()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetFocusedTextBox) can be used to check if any
TextBox is in focus.
- When the player is done inputting text, the
[`FocusLost`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FocusLost) event fires, indicating if the user
pressed Enter to submit text along with the [`InputObject`](https://create.roblox.com/docs/reference/engine/classes/InputObject)
that caused the loss of focus. When using on screen keyboards on mobile and
console,
[`ReturnPressedFromOnScreenKeyboard`](https://create.roblox.com/docs/reference/engine/classes/TextBox#ReturnPressedFromOnScreenKeyboard)
may also fire.
- If some more important matter comes up during gameplay, you can
[`ReleaseFocus`](https://create.roblox.com/docs/reference/engine/classes/TextBox#ReleaseFocus) of the TextBox so that a
player's keyboard input returns to your game.

## Text Editing
![A TextBox with text being selected, copied and pasted](https://prod.docsiteassets.roblox.com/assets/legacy/TextBox-Selection.gif)

A TextBox supports text selection through its
[`CursorPosition`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CursorPosition) and
[`SelectionStart`](https://create.roblox.com/docs/reference/engine/classes/TextBox#SelectionStart) properties. Using
[`GetPropertyChangedSignal`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal), you can
detect when a selection changes. Additionally, it is possible for players to
copy and paste text within a TextBox, enabling basic clipboard support.

**Text Filtering Notice** Games that facilitate player-to-player communication
using text, such as custom chat or nametags, must properly filter such text
using [`TextService:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextService#FilterStringAsync) or
[`Chat:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/Chat#FilterStringAsync). If this is not properly done, your game may
receive moderation action.