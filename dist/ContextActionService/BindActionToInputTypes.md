This function binds *functionToBind* to input events such as key presses,
mouse movement, or controller input. The specific input types the engine
listens for are listed as parameters of BindAction. Whenever a player uses
any of these input types, the Roblox engine calls "functionToBind".
BindAction sets the priorityLevel via [`Enum.ContextActionPriority`](https://create.roblox.com/docs/reference/engine/enums/ContextActionPriority) to
Default.Value, which is 2000. Use [`ContextActionService:GetButton()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetButton)
to control the priority of bound events.

In addition to input types, BindAction has a createTouchButton parameter.
When this is set to true it creates an [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) on any device
with a touchscreen. A [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is also created to put the context
buttons into named ContextActionGui and is parented to [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).
The created ImageButton is parented to this ContextActionGui. GetButton
can be used to retrieve the button that was created.

If an input has more than one function bound to it, each function will be
placed on a stack. A stack obeys the principle of last in first out. So
the first object placed on the stack will be on the top. The next object
placed on the stack becomes the top and the previous object moves one
position down (like a stack of books). When the input is triggered, the
function at the top of the stack is called. If the function returns
[`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult).Pass this will continue down the stack. To
remove a function from being called by all input that it was bound by use
[`ContextActionService:UnbindAction()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#UnbindAction).

BindAction allows control over whether or not a bound action should be
processed by other actions on the stack using [`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult).
If [`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult) is returned in the callback function,
every action below it in the stack (last function called gets executed
first) will get a chance to process it. Anything other than Pass will be
treated as [`Enum.ContextActionResult`](https://create.roblox.com/docs/reference/engine/enums/ContextActionResult), including nil. It will also
sink if the callback is yielded.