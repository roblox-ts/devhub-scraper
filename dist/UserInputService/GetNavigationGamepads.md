This function returns an array of gamepad
[`UserInputTypes`](https://create.roblox.com/docs/reference/engine/enums/UserInputType) that are connected and enabled for GUI
navigation. This list is in descending order of priority, meaning it can
be iterated over to determine which gamepad should have navigation
control.

Whether a connected gamepad is a navigation gamepad only determines which
gamepad(s) control the navigation GUIs. This does not influence navigation
controls.

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`UserInputService:SetNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#SetNavigationGamepad), to enable or disable a
gamepad for GUI navigation
- [`UserInputService:IsNavigationGamepad()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsNavigationGamepad), to verify if a gamepad
is enabled for GUI navigation
- [`UserInputService:GetConnectedGamepads()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetConnectedGamepads), to return all gamepads
connected regardless of GUI navigational control