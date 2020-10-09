Breaks all joints between the specified [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s and other [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s.

This function requires an array of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s. Note, joints will not be broken between these [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s (each other), only between these [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s and other [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s not in the array.

This function is used by the Roblox Studio Move tool when the user starts moving a selection. In conjunction with [Plugin:GetJoinMode](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetJoinMode) and [Workspace:JoinToOutsiders](https://developer.roblox.com/en-us/api-reference/function/Workspace/JoinToOutsiders) it can be used to retain join functionality when developing custom studio build tools. See the snippets below for an example.

```lua
-- finished moving a selection, make joints
local function finishedMovingParts(parts)
    local joinMode = Plugin:GetJoinMode()
    workspace:JoinToOutsiders(parts, joinMode)
end
``` ```lua
-- started moving a selection, break joints
local function startMovingParts(parts)
    workspace:UnjoinFromOutsiders(parts)
end
```

Developers interested in seeing how this function is used in the Roblox Studio should see the [Studio Tools GitHub repository](https://github.com/Roblox/Studio-Tools).