SetPosition sets the position of a touch button created by
[`BindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction). Specifically, this
sets the [`GuiObject.Position`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position) property of the [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton)
that would be returned by
[`GetButton`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetButton). If no such bound
action exists (e.g. nothing is returned by GetButton), this function does
nothing and throws no error.

This function is part of a family of methods that customize the touch
button of an action. Others in this family include
[`SetImage`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetImage) and
[`SetTitle`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#SetTitle).