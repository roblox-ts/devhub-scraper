Determines whether a [`BaseScript`](https://create.roblox.com/docs/reference/engine/classes/BaseScript) will run or not. This should be
used in favor of the similar but opposite
[`Disabled`](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Disabled) property.

If a script is disabled by changing this property to false while the
script is running, the current running thread of the script will be
terminated.

If this property is changed from false to true, the script will run again.
This means that [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Enabled) can be toggled to
restart a script:
```lua
scriptObject.Enabled = false
scriptObject.Enabled = true
```

Note that the above code snippet cannot be used within the script itself,
since disabling the script from within itself will terminate the thread
and the line to reenable it will never execute.