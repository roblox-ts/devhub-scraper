Returns the child of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) with the given name. If the
child does not exist, it will yield the current thread until it does. If
the `timeOut` parameter is specified, this method will time out after the
specified number of seconds and return `nil`.
#### Primary Usage

[`WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild) is extremely important when
working on code run by the client in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript). The Roblox
engine does not guarantee the time or order in which objects are
replicated from the server to the client. Additionally, if an experience
has [`Workspace.StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) set to true,
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that are far away from the player's character
may not be streamed to the client, potentially causing scripts to break
when indexing objects that do not yet exist on the client.
#### Notes

- 

This function does not yield if a child with the given name exists when
the call is made.

- 

[`Instance:FindFirstChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChild) is a more efficient alternative to
[`WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild) for objects that are
assumed to exist.

- 

If a call to this method exceeds 5 seconds without returning, and no
`timeOut` parameter has been specified, a warning will be printed to the
output that the thread may yield indefinitely. This warning takes the
following form where `X` is the parent's name and `Y` is the child's
name:

`Infinite yield possible on 'X:WaitForChild("Y")'`