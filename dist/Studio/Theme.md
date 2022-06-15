The Theme property is used to get/set the current [StudioTheme](https://developer.roblox.com/en-us/api-reference/class/StudioTheme) used by [Studio](https://developer.roblox.com/en-us/api-reference/class/Studio).

This is intended for use within [Plugins](https://developer.roblox.com/en-us/api-reference/class/Plugin), but will also execute in the Command Line. You can access the function via:

settings().Studio.Theme

For instance, if you would like to print the current Studio theme:

print("The current Studio theme is:", settings().Studio.Theme)