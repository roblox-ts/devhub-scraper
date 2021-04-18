Invoke will call the [BindableFunction.OnInvoke](https://developer.roblox.com/en-us/api-reference/property/BindableFunction/OnInvoke) callback and return any values that were returned by the callback (if any).

Limitations
-----------

Invocations will **yield** until the corresponding callback is found. If the callback was never set, the script that invokes it will not resume execution.

\### Subscription Only one function can be bound to \`BindableFunction/Invoke\` at a time. If you assign multiple functions, only the last one assigned will be used.

### Parameter Limitations

Any type of Roblox object such as an [Enumeration](https://developer.roblox.com/api-reference/enum), [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance), or userdata can be passed as a parameter when a [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) is fired or a [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) invoked. Lua types such as numbers, strings, and booleans can also be passed, although there are some limitations on how data can be passed.

#### Mixed Tables

Avoid passing a mixed table (some values indexed by number and others by key), as **only the data indexed by number will be passed**. For example, when the server receives the `colorData` table illustrated below, it will only see indices 1 and 2 containing `"Blue"` and `"Yellow"` while the other data will be lost in the transfer. Note, however, that **sub-tables** do not need to be indexed in the same way as their parent — in other words, as long as each individual sub-table is indexed with the same type, all of the data will be preserved.

#### Non-String Indices

If any indices of a passed table are non-string type ([Instance](https://developer.roblox.com/en-us/api-reference/class/Instance), userdata, function, another table, etc.), those indices will be converted to a string.

\-- Mixed table
local colorData = {}
colorData\[1\] = "Blue"
colorData\[2\] = "Yellow"
colorData\["Color1"\] = "Green"
colorData\["Color2"\] = "Red"

-- Table with two key-indexed sub-tables
local playerData = {}
playerData\["CharData"\] = {
	-- All children indexed by key
	CharName = "Diva Dragonslayer",
	CharClass = "Knight"
}
playerData\["Inventory"\] = {
	-- All children numerically indexed
	"Sword",
	"Bow",
	"Rope"
}

#### Functions

Functions passed as parameters will not be replicated, therefore making it impossible to use these objects to pass functions between scripts.