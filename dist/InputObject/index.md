An **InputObject** represents a single user input, such as mouse movement, touches, key presses and more. It is created when an input begins.

The properties of this object vary according the [UserInputType](https://developer.roblox.com/en-us/api-reference/property/InputObject/UserInputType). Each kind of input will undergo various changes to its [UserInputState](https://developer.roblox.com/en-us/api-reference/property/InputObject/UserInputState). During the lifetime of an input, other properties which further describe the input may change, such as [Position](https://developer.roblox.com/en-us/api-reference/property/InputObject/Position) and [Delta](https://developer.roblox.com/en-us/api-reference/property/InputObject/Delta). Keyboard and gamepad button presses will have the [KeyCode](https://developer.roblox.com/en-us/api-reference/property/InputObject/KeyCode) property set.

Once created at the beginning of an input, the same object persists and is updated until the input ends. As a result, you can track the object's changes using the [Changed](https://developer.roblox.com/en-us/api-reference/event/Instance/Changed) event as the user changes the input in question. You can also place these objects into a list of active inputs track and interact with the object after it's creation by an event such as [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan). This is mostly useful for touch events, as each touch point will have a separate InputObject.

See also
========

*   [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService), which passes an InputObject to [bound](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction) action-handling functions
*   [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService), whose events and functions often use InputObject
*   [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject), whose events related to user input use InputObject