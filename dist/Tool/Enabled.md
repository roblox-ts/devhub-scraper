The Enabled property relates to whether or not the [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool) can be used.
This is useful if you want to prevent a player from using a tool, but do
not want to remove it from their [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack).

When set to true, the tool can use the tool.

When set to false, the tool is disabled and the player cannot use the
tool. It prevents the tool from being activated or deactivated by
[the Tool.Activate](https://create.roblox.com/docs/reference/engine/classes/the Tool#Activate) and [Tool:Deactivate](https://create.roblox.com/docs/reference/engine/classes/Tool#Deactivate) functions. It also prevents the
[Tool.Activated](https://create.roblox.com/docs/reference/engine/classes/Tool#Activated) and [Tool.Deactivated](https://create.roblox.com/docs/reference/engine/classes/Tool#Deactivated) events from firing for the tool.