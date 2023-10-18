BindActionAtPriority behaves like
[`BindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) but also allows a
priority to be assigned to the bound action. If multiple actions are bound
to the same input, the higher priority function is called regardless of
the order in which the actions were bound. In other words, this function
overrides the normal "stack" behavior of BindAction.