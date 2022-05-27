**Mouse** has been superseded by [UserInputService](https://create.roblox.com/docs/reference/engine/classes/UserInputService) and
[ContextActionService](https://create.roblox.com/docs/reference/engine/classes/ContextActionService), which cover a broader scope, are more feature rich,
and support **cross-platform** patterns better. It remains supported because
of its widespread use, but you should strongly consider using these
alternatives.

The **Mouse** object houses various API for pointers, primarily for buttons
and raycasting. It can be accessed through [Player:GetMouse](https://create.roblox.com/docs/reference/engine/classes/Player#GetMouse) called on the
[Players.LocalPlayer](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) in a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript). It is also passed by the
[Tool.Equipped](https://create.roblox.com/docs/reference/engine/classes/Tool#Equipped) event.

- It is most notable for the [Icon](https://create.roblox.com/docs/reference/engine/classes/Mouse#Icon) property, which changes the
  cursor's appearance.
- It continually raycasts the screen mouse position into the 3D world using
  the [TargetFilter](https://create.roblox.com/docs/reference/engine/classes/Mouse#TargetFilter) property, storing the results of the
  raycast in the [Hit](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit), [Target](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target), and
  [TargetSurface](https://create.roblox.com/docs/reference/engine/classes/Mouse#TargetSurface) properties. These can be useful for
  simple cases, but [WorldRoot:Raycast](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#Raycast) should be used in more complicated
  scenarios (whitelists, etc).
- [Plugins](https://create.roblox.com/docs/reference/engine/classes/Plugin) can use use [Plugin:GetMouse](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetMouse) to get a [PluginMouse](https://create.roblox.com/docs/reference/engine/classes/PluginMouse), which
  behaves similarly.

```lua
-- From a LocalScript:
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = Player:GetMouse()
-- Setting the mouse icon
mouse.Icon = "rbxasset://SystemCursors/Wait"
``[

Note:

- This object does not control.restrict pointer movement. For this, see
  ](https://create.roblox.com/docs/reference/engine/classes/

Note:

- This object does not control#restrict pointer movement. For this, see
  )UserInputService/MouseBehavior` and
  `UserInputService/MouseDeltaSensitivity`.
- If two functions are connected to same input event, such as
  `Mouse/Button1Down|Button1Down[, **both** functions will run when the event
  fires. There is no concept of sinking.passing input, as events don't support
  this behavior. However, ](https://create.roblox.com/docs/reference/engine/classes/, **both** functions will run when the event
  fires. There is no concept of sinking#passing input, as events don't support
  this behavior. However, )ContextActionService` does have this behavior
  through `ContextActionService/BindAction|BindAction`.
- While a mouse may not be available on all platforms, Mouse will still
  function on mobile (touch) and console (gamepad), which don't typically have
  mice or pointer hardware. For explicit cross-platform behaviors, use
  `UserInputService` and `ContextActionService`.