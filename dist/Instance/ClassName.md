A read-only string representing the class this [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) belongs to.

This property can be used with various other functions of Instance that are used to identify objects by type, such as [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) or [Instance:FindFirstChildOfClass](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildOfClass).

Note this property is read only and cannot be altered by scripts. Developers wishing to change an [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s class will instead have to create a new [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance).

Unlike [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA), ClassName can be used to check if an object belongs to a specific class ignoring class inheritance. For example:

```lua
for _, child in ipairs(game.Workspace:GetChildren()) do
    if child.ClassName == "Part" then
        print("Found a Part")
        -- will find Parts in model, but NOT TrussParts, WedgeParts, etc
    end
end
```