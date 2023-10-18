GetButton returns the [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) created by
[`BindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) if its third
parameter was true and the device is
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled). The only parameter to
this function must match exactly the name of the action originally sent to
BindAction.

If no such action was bound or if a button was not created, this function
returns `nil`.