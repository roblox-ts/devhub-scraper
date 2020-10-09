**Mouse** has been superseded by [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) and [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService), which cover a broader scope, are more feature rich, and support **cross-platform** patterns better. It remains supported because of its widespread use, but you should strongly consider using these alternatives.

The **Mouse** object houses various API for pointers, primarily for buttons and raycasting. It can be accessed through [Player:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Player/GetMouse) called on the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript). It is also passed by the [Tool.Equipped](https://developer.roblox.com/en-us/api-reference/event/Tool/Equipped) event.

*   It is most notable for the [Icon](https://developer.roblox.com/en-us/api-reference/property/Mouse/Icon) property, which changes the cursor's appearance.
*   It continually raycasts the screen mouse position into the 3D world using the [TargetFilter](https://developer.roblox.com/en-us/api-reference/property/Mouse/TargetFilter) property, storing the results of the raycast in the [Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit), [Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target), and [TargetSurface](https://developer.roblox.com/en-us/api-reference/property/Mouse/TargetSurface) properties. These can be useful for simple cases, but [WorldRoot:Raycast](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/Raycast) should be used in more complicated scenarios (whitelists, etc).
*   [Plugins](https://developer.roblox.com/en-us/api-reference/class/Plugin) can use use [Plugin:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetMouse) to get a [PluginMouse](https://developer.roblox.com/en-us/api-reference/class/PluginMouse), which behaves similarly.

```lua
-- From a LocalScript:
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = Player:GetMouse()
-- Setting the mouse icon
mouse.Icon = "rbxasset://SystemCursors/Wait"
``` 

Notes
-----

*   This object does not control/restrict pointer movement. For this, see [UserInputService.MouseBehavior](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseBehavior) and [UserInputService.MouseDeltaSensitivity](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseDeltaSensitivity).
*   If two functions are connected to same input event, such as [Button1Down](https://developer.roblox.com/en-us/api-reference/event/Mouse/Button1Down), **both** functions will run when the event fires. There is no concept of sinking/passing input, as events don't support this behavior. However, [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService) does have this behavior through [BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction).
*   While a mouse may not be available on all platforms, Mouse will still function on mobile (touch) and console (gamepad), which don't typically have mice or pointer hardware. For explicit cross-platform behaviors, use [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) and [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService).