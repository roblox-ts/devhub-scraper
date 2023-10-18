The content ID of an uploaded script. When set binds the uploaded code to
the script's [`Script.Source`](https://create.roblox.com/docs/reference/engine/classes/Script#Source).

By default, this property is set to *'[Embedded]'*. This means the source
of the script is not linked to an upload script and is instead written in
the script.
```lua
script.LinkedSource = "http://www.roblox.com/asset/?id=1014476" -- link source
```

Developers should remove a linked source via the properties window, rather
than setting the property to *'[Embedded]'*.

For the LinkedSource property for [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript)s, please see
[`ModuleScript.LinkedSource`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript#LinkedSource).