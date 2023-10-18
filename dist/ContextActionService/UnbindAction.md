UnbindAction will unbind an action by name from user inputs so that the
action handler function will no longer be called. Call this function when
the context for some action is no longer applicable, such as closing a
user interface, exiting a car or [`unequipping`](https://create.roblox.com/docs/reference/engine/classes/Tool#Unequipped) a
[`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool). See [`BindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction) for
more information on how bound actions operate.

This function **will not** throw an error if there is no such action bound
with the given string. Using
[`GetAllBoundActionInfo`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetAllBoundActionInfo)
or the Developer Console's "Action Bindings" tab, you can find out what
actions are presently bound.