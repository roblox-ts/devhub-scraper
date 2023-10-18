[`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is a service used to detect and capture the different
types of input available on a user's device.

The primary purpose of this service is to allow for experiences to cooperate
with multiple forms of available input, such as gamepads, touch screens, and
keyboards. It allows a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to perform different actions
depending on the device and, in turn, provide the best experience for the end
user.

Some usages of this service include detecting user input when they interact
with GUIs, tools, and other game instances. In order to detect user input, the
service must look for a service event. For example, the service can detect
events such as when the user touches the screen of a mobile device using
[`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted), or connects a gamepad such as an Xbox
controller to their device using [`UserInputService.GamepadConnected`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadConnected).

Since this service is client-side only, it will only work when used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript). As UserInputService is client-side only, users in the
game can only detect their own input - and not the input of others.

See also:

- [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService), a service which allows you to bind functions
to multiple user inputs