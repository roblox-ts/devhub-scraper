GetTags is given an instance and returns an array of strings, which are
the tags applied to the given object.
```lua
local CollectionService = game:GetService("CollectionService")
local object = workspace.Model
local tags = CollectionService:GetTags(object)
print("The object " .. object:GetFullName() .. " has tags: " .. table.concat(tags, ", "))
```

This method is useful when you want to do something with multiple tags at
once on an object. However, it would be inefficient to use this method to
check for the existence of a single tag. For this, use
[`CollectionService:HasTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#HasTag) to check for a single tag.