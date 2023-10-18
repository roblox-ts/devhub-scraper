The **Enabled** property relates to whether or not the [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) can be
used. This is useful if you want to prevent a player from using a tool,
but don't want to remove it from their [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack).

When set to `true`, the player can use the tool. When set to `false`, the
tool is disabled and the player cannot use it; this prevents the tool from
being activated or deactivated by the [`Tool:Activate()`](https://create.roblox.com/docs/reference/engine/classes/Tool#Activate) and
[`Tool:Deactivate()`](https://create.roblox.com/docs/reference/engine/classes/Tool#Deactivate) methods, and it prevents the
[`Tool.Activated`](https://create.roblox.com/docs/reference/engine/classes/Tool#Activated) and [`Tool.Deactivated`](https://create.roblox.com/docs/reference/engine/classes/Tool#Deactivated) events from firing.