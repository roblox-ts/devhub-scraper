This function returns whether the given [`Enum.CoreGuiType`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType) is enabled or
if it has been disabled using [`StarterGui:SetCoreGuiEnabled()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled).

This function should be called on the client and is used by the core
scripts to help determine which core GUI elements to show.

GetCoreGuiEnabled only returns *false* if the given [`Enum.CoreGuiType`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType) has
been disabled using [`StarterGui:SetCoreGuiEnabled()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled). Setting
*TopbarEnabled* to *false* using [`StarterGui:SetCore()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCore) hides all
[`CoreGuiTypes`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType) and does not affect the result of
function.