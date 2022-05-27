A read-only string representing the class this [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance) belongs to.

This property can be used with various other functions of Instance that
are used to identify objects by type, such as [Instance:IsA](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) or
[Instance:FindFirstChildOfClass](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildOfClass).

Note this property is read only and cannot be altered by scripts.
Developers wishing to change an [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance)'s class will instead have to
create a new [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance).

Unlike [Instance:IsA](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA), ClassName can be used to check if an object belongs
to a specific class ignoring class inheritance. For example:

```
for _, child in ipairs(game.Workspace:GetChildren()) do
    if child.ClassName == "Part" then
        print("Found a Part")
        -- will find Parts in model, but NOT TrussParts, WedgeParts, etc
    end
end
```