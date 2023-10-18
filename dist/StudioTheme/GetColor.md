The **GetColor()** function returns the [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) corresponding to
the arguments provided. For instance, if you would like to get the
[`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) of the Studio "MainButton" when it's **disabled**, you
can use the following code:
```lua
settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainButton, Enum.StudioStyleGuideModifier.Disabled)
```lua

See the `Enum.StudioStyleGuideColor` reference for a list of Studio elements and `Enum.StudioStyleGuideModifier` for a list of modifiers.
```