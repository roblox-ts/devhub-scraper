The Theme property is used to get/set the current [`StudioTheme`](https://create.roblox.com/docs/reference/engine/classes/StudioTheme) used
by [`Studio`](https://create.roblox.com/docs/reference/engine/classes/Studio).

This is intended for use within [`Plugins`](https://create.roblox.com/docs/reference/engine/classes/Plugin), but will also
execute in the Command Line. You can access the function via:
```lua
settings().Studio.Theme
```

For instance, if you would like to print the current Studio theme:
```lua
print("The current Studio theme is:", settings().Studio.Theme)
```