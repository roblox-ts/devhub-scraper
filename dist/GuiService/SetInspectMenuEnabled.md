This function allows developers to enable or disable default Inspect and Buy functionality. This is useful when you want to disable the feature in your game, entirely or during certain parts of your game (such as a cutscene). The feature is enabled by default.

The code sample below demonstrates how to disable the Inspect Menu for your game:

```Lua
local GuiService = game:GetService("GuiService")
GuiService:SetInspectMenuEnabled(false)
``` 

See also
--------

*   [Avatar Inspect Menu](https://developer.roblox.com/articles/avatar-inspect-menu), an article providing a more detailed explanation of the Inspect and Buy feature and how it works
*   [GuiService:InspectPlayerFromHumanoidDescription](https://developer.roblox.com/en-us/api-reference/function/GuiService/InspectPlayerFromHumanoidDescription), allows a developer to bring up the Inspect menu showing the assets listed in this [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription) object. This is especially useful when what is being worn on a player's avatar on the Roblox platform is not necessarily the same as their in-game appearance
*   [GuiService:InspectPlayerFromUserId](https://developer.roblox.com/en-us/api-reference/function/GuiService/InspectPlayerFromUserId), allows the Inspect Menu to appear showing the user that has the given [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId). This is especially useful when you want to inspect players who aren't in the current game