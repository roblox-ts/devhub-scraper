This event is fired when any script calls the [BindableEvent:Fire](https://developer.roblox.com/en-us/api-reference/function/BindableEvent/Fire) method is called, using the same arguments as parameters.

Parameter Limitations
---------------------

Any type of Roblox object such as an [Enumeration](https://developer.roblox.com/api-reference/enum), [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance), or userdata can be passed as a parameter when a [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) is fired or a [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) invoked. Lua types such as numbers, strings, and booleans can also be passed, although there are some limitations on how data can be passed.

### Mixed Tables

If a Table is passed as an argument to a BindableEvent it must be an array without missing entries or have string keys, not a mixture, or else the string keys will be lost.

Avoid passing a mixed table (some values indexed by number and others by key), as **only the data indexed by number will be passed**. For example, when the server receives the `colorData` table illustrated below, it only sees indices 1 and 2 containing `"Blue"` and `"Yellow"` while the other data is lost in the transfer. Note, however, that **sub-tables** do not need to be indexed in the same way as their parent — in other words, as long as each individual sub-table is indexed with the same type, all of the data is preserved.

Metatables are not preserved.

### Non-String Indices

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

### Functions

Functions passed as parameters will not be replicated, therefore making it impossible to use these objects to pass functions between scripts.