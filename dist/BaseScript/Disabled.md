Determines whether a [BaseScript](https://create.roblox.com/docs/reference/engine/classes/BaseScript) will run or not.

[Script](https://create.roblox.com/docs/reference/engine/classes/Script)s and [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s, when parented to a valid parent, will run
when Disabled is false.

If Disabled is set to true whilst a script is running, the current thread
will be terminated.

If Disabled is set to true from false, the script will run again. This
means the Disabled property can be toggled to restart a script:

```lua
scriptObject.Disabled = false
scriptObject.Disabled = true
```

Note, the above code snippet cannot be used within the script itself. This
is because once the script is disabled the thread will terminate.