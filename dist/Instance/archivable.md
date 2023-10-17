This property determines whether an [`object`](https://create.roblox.com/docs/reference/engine/classes/Instance) should be
included when the game is published or saved, or when
[`Instance:Clone()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Clone) is called on one of the object's ancestors.
Calling Clone directly on an object will return nil if the cloned object
is not archivable. Copying an object in Studio (using the 'Duplicate' or
'Copy' options) will ignore the Archivable property and set Archivable to
true for the copy.
```lua
local part = Instance.new("Part")
print(part:Clone())  --> Part
part.Archivable = false
print(part:Clone())  --> nil
```