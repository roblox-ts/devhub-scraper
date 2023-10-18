This function sets whether the [`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui) element associated with the
given [`Enum.CoreGuiType`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType) is enabled or disabled.

The top bar can not be disabled using this function. To disable the top
bar, set *TopbarEnabled* to *false* using [`StarterGui:SetCore()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCore).
This will also disable the element associated with all
[`CoreGuiTypes`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType).