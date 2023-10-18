GetAllBoundActioninfo returns a table which maps all actions' names (those
originally passed to [`BindAction`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindAction))
to a table returned by
[`GetBoundActionInfo`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#GetBoundActionInfo) when
called with the action name itself. Using this function, you can inspect
all presently bound actions. This is useful when debugging their priority
levels or stack orders.