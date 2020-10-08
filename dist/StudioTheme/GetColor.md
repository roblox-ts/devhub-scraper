The **GetColor()** function returns the [Color3](https://developer.roblox.com/en-us/api-reference/datatype/Color3) corresponding to the arguments provided. For instance, if you would like to get the [Color3](https://developer.roblox.com/en-us/api-reference/datatype/Color3) of the Studio “MainButton” when it's **disabled**, you can use the following code:

settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainButton, Enum.StudioStyleGuideModifier.Disabled)

See the [StudioStyleGuideColor](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideColor) reference for a list of Studio elements and [StudioStyleGuideModifier](https://developer.roblox.com/en-us/api-reference/enum/StudioStyleGuideModifier) for a list of modifiers.