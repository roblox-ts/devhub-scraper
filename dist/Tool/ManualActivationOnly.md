The ManualActivationOnly property controls whether the [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool) can be
activated without explicitly executing [Tool:Activate](https://create.roblox.com/docs/reference/engine/classes/Tool#Activate) in a script.

When set to true, the tool will only fire [Tool.Activated](https://create.roblox.com/docs/reference/engine/classes/Tool#Activated) when
[Tool:Activate](https://create.roblox.com/docs/reference/engine/classes/Tool#Activate) is called. This also suppresses the
[ContextActionService](https://create.roblox.com/docs/reference/engine/classes/ContextActionService)'s [ContextActionService:BindActivate](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActivate) function.

When set to false, mouse clicks (when the tool is equipped) will also fire
[Tool.Activated](https://create.roblox.com/docs/reference/engine/classes/Tool#Activated).