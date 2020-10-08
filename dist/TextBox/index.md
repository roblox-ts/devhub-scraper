![A TextBox being clicked on and typed into in Roblox Studio](https://developer.roblox.com/assets/blt1aeb8750aa338cd7/TextBox.gif)

A **TextBox** allows the player to provide text input. It behaves similarly to a [TextButton](https://developer.roblox.com/en-us/api-reference/class/TextButton), except that a single TextBox can be put in focus by clicking, tapping or gamepad selection. While in focus, the player can use a keyboard to change the [Text](https://developer.roblox.com/en-us/api-reference/property/TextBox/Text) property.

*   If there is no text, the [PlaceholderText](https://developer.roblox.com/en-us/api-reference/property/TextBox/PlaceholderText) will be visible. This is useful prompting players of the kind or format of data they should input.
*   By default, the [ClearTextOnFocus](https://developer.roblox.com/en-us/api-reference/property/TextBox/ClearTextOnFocus) property is enabled and ensures there is no existing text when a TextBox is focused. This may not be desirable for text that should be editable by the player.
*   The [MultiLine](https://developer.roblox.com/en-us/api-reference/property/TextBox/MultiLine) property allows players to enter multiple lines of text with newline characters (`\n`).

The [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService) honors TextBox keybinds and will automatically prevent key press events from being passed to actions bound with [ContextActionService:BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction). [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan) and related events will still fire while a TextBox is in focus.

Focus State
-----------

It is possible to detect and change the focus state of a TextBox:

*   You can use [CaptureFocus](https://developer.roblox.com/en-us/api-reference/function/TextBox/CaptureFocus) when a dialogue appears so that the player doesn't have to click on a TextBox when it becomes available; you can use [ContextActionService:BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction) to bind a certain key to focus a TextBox using this function. When a TextBox comes into focus, the [Focused](https://developer.roblox.com/en-us/api-reference/event/TextBox/Focused) event fires.
*   You can detect if a certain TextBox is in focus by using [IsFocused](https://developer.roblox.com/en-us/api-reference/function/TextBox/IsFocused). Alternatively, [UserInputService:GetFocusedTextBox](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetFocusedTextBox) can be used to check if any TextBox is in focus.
*   When the player is done inputting text, the [FocusLost](https://developer.roblox.com/en-us/api-reference/event/TextBox/FocusLost) event fires, indicating if the user pressed Enter to submit text along with the [InputObject](https://developer.roblox.com/en-us/api-reference/class/InputObject) that caused the loss of focus. When using on screen keyboards on mobile and console, [ReturnPressedFromOnScreenKeyboard](https://developer.roblox.com/en-us/api-reference/event/TextBox/ReturnPressedFromOnScreenKeyboard) may also fire.
*   If some more important matter comes up during gameplay, you can [ReleaseFocus](https://developer.roblox.com/en-us/api-reference/function/TextBox/ReleaseFocus) of the TextBox so that a player's keyboard input returns to your game.

Text Editing
------------

![A TextBox with text being selected, copied and pasted](https://developer.roblox.com/assets/blte51c1caa1e82699e/TextBox-Selection.gif)

A TextBox supports text selection through its [CursorPosition](https://developer.roblox.com/en-us/api-reference/property/TextBox/CursorPosition) and [SelectionStart](https://developer.roblox.com/en-us/api-reference/property/TextBox/SelectionStart) properties. Using [GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal), you can detect when a selection changes. Additionally, it is possible for players to copy and paste text within a TextBox, enabling basic clipboard support.

**Text Filtering Notice**  
Games that facilitate player-to-player communication using text, such as custom chat or nametags, must properly filter such text using [TextService:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/TextService/FilterStringAsync) or [Chat:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/Chat/FilterStringAsync). If this is not properly done, your game may receive moderation action.