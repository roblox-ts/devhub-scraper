This function returns an array of gamepad [UserInputTypes](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) that are connected and enabled for GUI navigation. This list is in descending order of priority, meaning it can be iterated over to determine which gamepad should have navigation control.

Whether a connected gamepad is a navigation gamepad only determines which gamepad(s) control the navigation GUIs. This does not influence navigation controls.

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See also
--------

*   [UserInputService:SetNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/SetNavigationGamepad), to enable or disable a gamepad for GUI navigation
*   [UserInputService:IsNavigationGamepad](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsNavigationGamepad), to verify if a gamepad is enabled for GUI navigation
*   [UserInputService:GetConnectedGamepads](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetConnectedGamepads), to return all gamepads connected regardless of GUI navigational control