Returns the child of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) with the given name. If the child does not exist, it will yield the current thread until it does.

If the _timeOut_ parameter is specified, this function will return nil and time out after _timeOut_ seconds elapsing without the child being found.

Where should WaitForChild be used?
----------------------------------

WaitForChild is extremely important when working on code ran by the client (in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)). Roblox does not guarantee the time or order in which objects are replicated from the server to the client. This can cause scripts to break when indexing objects that do not exist yet.

For example, a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) may access a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) called 'Ship' like so:

```Lua
local ship = workspace.Ship
-- Will error if ship hasn't replicated
``` 

However if the model 'Ship' has not replicated to the client when this code is ran an error will be returned breaking the [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

Another alternative is using [Instance:FindFirstChild](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChild). Not only is this good practice when indexing objects in the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel) (as it avoids accidentally accessing properties) but it does not break if the object does not exist. For example:

```Lua
local ship = workspace:FindFirstChild("Ship")
-- Won't error, but ship will be nil if the ship hasn't replicated
``` 

Here, if the model doesn't exist the code will not error. Instead the value ship will be equal to nil. This is better, but still not much good if we want to use the ship model.

Instead WaitForChild should be used:

```Lua
local ship = workspace:WaitForChild("Ship")
-- Will wait until the ship has replicated before continuing
``` 

Here, the thread will be yielded until the ship model has been found. This means the ship model can be used as soon as it is ready.

Notes
-----

*   If a call to this function exceeds 5 seconds without returning, and no _timeOut_ parameter has been specified, a warning will be printed to the output that the thread may yield indefinitely; this warning takes the form `Infinite yield possible on 'X:WaitForChild("Y")'`, where X is the parent name and Y is the child object name.
*   This function does not yield if a child with the given name exists when the call is made.
*   This function is less efficient than [Instance:FindFirstChild](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChild) or the dot operator. Therefore, it should only be used when the developer is not sure if the object has replicated to the client. Generally this is only the first time the object is accessed