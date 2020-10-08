Sets the [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) property to nil, locks the [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) property, disconnects all connections and calls Destroy on all children. This function is the correct way to dispose of objects that are no longer required. Disposing of unneeded objects is important, since unnecessary objects and connections in a place use up memory (this is called a **memory leak**) which can lead to serious performance issues over time.

**Tip:** After calling Destroy on an object, set any variables referencing the object (or its descendants) to nil. This prevents your code from accessing anything to do with the object.

```Lua
local part = Instance.new("Part")
part.Name = "Hello, world"
part:Destroy()
-- Don't do this:
print(part.Name) --> "Hello, world"
-- Do this to prevent the above line from working:
part = nil
``` 

Once an [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) has been destroyed by this method it cannot be reused because the [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) property is locked. To temporarily remove an object, set [Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) it to nil instead. For example:

```Lua
object.Parent = nil
wait(2)
object.Parent = workspace
``` 

To Destroy an object after a set amount of time, use [Debris:AddItem](https://developer.roblox.com/en-us/api-reference/function/Debris/AddItem).