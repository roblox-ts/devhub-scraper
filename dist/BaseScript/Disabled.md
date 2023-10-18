Determines whether a [`BaseScript`](https://create.roblox.com/docs/reference/engine/classes/BaseScript) will run or not.

If a script is disabled by changing this property to true while the script
is running, the current running thread of the script will be terminated.

If this property is changed from true to false, the script will run again.
This means that [`Disabled`](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Disabled) can be toggled to
restart a script:
```lua
scriptObject.Disabled = true
scriptObject.Disabled = false
```

Note that the above code snippet cannot be used within the script itself,
since disabling the script from within itself will terminate the thread
and the line to reenable it will never execute.