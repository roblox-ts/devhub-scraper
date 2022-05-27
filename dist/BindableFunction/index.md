An object that allows you to give access to functions to external scripts.
Functions put in BindableFunctions will not be replicated, therefore making it
impossible to use these objects to pass functions between scripts. Functions
are invoked through [BindableFunction:Invoke](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke), which calls
[BindableFunction.OnInvoke](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#OnInvoke).

BindableFunctions do not allow for communication between the server and
client. If you are looking for this functionality use
[RemoteFunctions](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction).

## BindableEvents vs BindableFunctions

Unlike BindableFunctions, [BindableEvents](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) only allow for
one-way communication between two scripts:

- When a script invokes a BindableFunction it yields until the event is
  handled and returned by the subscribed script synchronously. This allows for
  scripts to effectively pass data during and after an event.
- When a script fires a BindableEvent, however, it does not yield for a
  return. The script continues executing as the event is handled by the
  subscribed script asynchronously.

## BindableFunctions vs RemoteFunctions

While BindableFunctions allow for two-way communication server-server scripts
or client-client [LocalScripts](https://create.roblox.com/docs/reference/engine/classes/LocalScript), [RemoteFunctions](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)
allow for two-way communicate the server and client. For more information on
RemoteFunctions, see
[Remote Events and Functions](/scripting/networking/remote-events-and-functions).

## Limitations

Invocations will **yield** until the corresponding callback is found. If the
callback was never set, the script that invokes it will not resume execution.

### Subscription

Only one function can be bound to [BindableFunction:Invoke](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke) at a time. If you
assign multiple functions, only the last one assigned will be used.

### Parameter Limitations

Any type of Roblox object such as an
[Enumeration](/reference/engine/enums), [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance), or userdata can
be passed as a parameter when a [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) is fired or a [RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)
invoked. Lua types such as numbers, strings, and booleans can also be passed,
although there are some limitations on how data can be passed.

#### Table Identity

Copies of tables are produced when passed as arguments to or returned from the
OnInvoke callback. This means that means that tables passed as arguments will
not be exactly equivalent to those provided on invocation, and tables returned
to the invoker will not be exactly equivalent to the ones returned by the
OnInvoke callback. You can demonstrate this by running the following script in
a BindableFunction:

```lua
local bindableFunction = script.Parent

bindableFunction.OnInvoke = function (t)
	print("OnInvoke", tostring(t), t)
	t = {bar = "foo"}
	print("OnInvoke2", tostring(t), t)
	return t
end

local t = {foo = "bar"}
print("Subscriber", tostring(t), t)
local retVal = script.Parent:Invoke(t)
print("return", tostring(retVal), retVal)
```

The above code may produce the following results in the output. Notice how the
memory addresses of every table printed are completely different from each
other, indicating they each represent different tables:

```text
  13:55:22.228  Subscriber table: 0xc7daaba4d5307f10  ▶ {...} - Publisher:11
  13:55:22.229  OnInvoke table: 0x2ee92a7818e7d210  ▶ {...} - Publisher:4
  13:55:22.229  OnInvoke2 table: 0xfa4ee529ddadf290  ▶ {...} - Publisher:6
  13:55:22.229  return table: 0x35b7bc1bc323d510  ▶ {...} - Publisher:13
```

#### Mixed Tables

Avoid passing a mixed table (some values indexed by number and others by key),
as **only the data indexed by number will be passed**. For example, when the
server receives the `colorData` table illustrated below, it only sees indices
1 and 2 containing `"Blue"` and `"Yellow"` while the other data is lost in the
transfer. Note, however, that **sub-tables** do not need to be indexed in the
same way as their parent — in other words, as long as each individual
sub-table is indexed with the same type, all of the data is preserved.

Metatables are not preserved.

#### Non-String Indices

If any indices of a passed table are non-string type (`Instance`, userdata,
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

#### Functions

Functions passed as parameters will not be replicated, therefore making it
impossible to use these objects to pass functions between scripts.