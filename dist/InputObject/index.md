An **InputObject** represents a single user input, such as mouse movement,
touches, key presses and more. It is created when an input begins.

The properties of this object vary according the
[UserInputType](https://create.roblox.com/docs/reference/engine/classes/InputObject#UserInputType). Each kind of input will undergo
various changes to its [UserInputState](https://create.roblox.com/docs/reference/engine/classes/InputObject#UserInputState). During the
lifetime of an input, other properties which further describe the input may
change, such as [Position](https://create.roblox.com/docs/reference/engine/classes/InputObject#Position) and [Delta](https://create.roblox.com/docs/reference/engine/classes/InputObject#Delta).
Keyboard and gamepad button presses will have the
[KeyCode](https://create.roblox.com/docs/reference/engine/classes/InputObject#KeyCode) property set.

Once created at the beginning of an input, the same object persists and is
updated until the input ends. As a result, you can track the object's changes
using the [Changed](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed) event as the user changes the input in
question. You can also place these objects into a list of active inputs track
and interact with the object after it's creation by an event such as
[UserInputService.InputBegan](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan). This is mostly useful for touch events, as each
touch point will have a separate InputObject.

See also:

- [ContextActionService](https://create.roblox.com/docs/reference/engine/classes/ContextActionService), which passes an InputObject to
  [bound](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) action-handling functions
- [UserInputService](https://create.roblox.com/docs/reference/engine/classes/UserInputService), whose events and functions often use InputObject
- [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject), whose events related to user input use InputObject