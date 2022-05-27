An object that allows events defined in one server-side [Script](https://create.roblox.com/docs/reference/engine/classes/Script) to be
subscribed to by another script for one-way communication.

BindableEvents do not allow for communication between the server and client.
If you are looking for this functionality use [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent).

## BindableEvents vs BindableFunctions

Unlike BindableEvents, [BindableFunctions](https://create.roblox.com/docs/reference/engine/classes/BindableFunction) allow for two-way
communication between two scripts:

- When a script fires a BindableEvent it does not yield for a return. The
  script continues executing as the event is handled by the subscribed script
  asynchronously.
- When a script invokes a BindableFunction, however, that script yields until
  the event is handled and returned by the subscribed script synchronously.
  This allows for scripts to effectively pass data during and after an event.

## BindableEvents vs RemoteEvents

While BindableEvents allow for one-way communication server-server scripts or
client-client [LocalScripts](https://create.roblox.com/docs/reference/engine/classes/LocalScript), [RemoteEvents](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) allow for
one-way communicate the server and client. For more information on
RemoteEvents, see
[Remote Events and Functions](/scripting/networking/remote-events-and-functions).

## Parameter Limitations

Any type of Roblox object such as an
[Enumeration](/reference/engine/enums), [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance), or userdata can
be passed as a parameter when a [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) is fired or a [RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)
invoked. Lua types such as numbers, strings, and booleans can also be passed,
although there are some limitations on how data can be passed.

### Mixed Tables

If a Table is passed as an argument to a BindableEvent it must be an array
without missing entries or have string keys, not a mixture, or else the string
keys will be lost.

Avoid passing a mixed table (some values indexed by number and others by key),
as **only the data indexed by number will be passed**. For example, when the
server receives the `colorData` table illustrated below, it only sees indices
1 and 2 containing `"Blue"` and `"Yellow"` while the other data is lost in the
transfer. Note, however, that **sub-tables** do not need to be indexed in the
same way as their parent — in other words, as long as each individual
sub-table is indexed with the same type, all of the data is preserved.

Metatables are not preserved.

### Non-String Indices

If any indices of a passed table are non-string type ([Instance](https://create.roblox.com/docs/reference/engine/classes/Instance), userdata,
function, another table, etc.), those indices will be converted to a string.

```lua
-- Mixed table
local colorData = {}
colorData[1] = "Blue"
colorData[2] = "Yellow"
colorData["Color1"] = "Green"
colorData["Color2"] = "Red"

-- Table with two key-indexed sub-tables
local playerData = {}
playerData["CharData"] = {
  -- All children indexed by key
  CharName = "Diva Dragonslayer",
  CharClass = "Knight"
}
playerData["Inventory"] = {
  -- All children numerically indexed
  "Sword",
  "Bow",
  "Rope"
}
```

### Functions

Functions passed as parameters will not be replicated, therefore making it
impossible to use these objects to pass functions between scripts.