This function allows a developer to bring up the Inspect menu showing the assets listed in this [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription) object.

This allows further customization with what is shown in the Inspect Menu when players inspect other players in your game. If your game modifies what the players are wearing, you can instead give the Inspect Menu a HumanoidDescription object that represents what a player is wearing and those items will be shown. You should pass a name as well to represent the name of the player that will be inspected.

See also
--------

*   [Avatar Inspect Menu](https://developer.roblox.com/articles/avatar-inspect-menu), an article providing a more detailed explanation of the Inspect and Buy feature and how it works
*   [GuiService:SetInspectMenuEnabled](https://developer.roblox.com/en-us/api-reference/function/GuiService/SetInspectMenuEnabled), allows developers to enable or disable default Inspect and Buy functionality
*   [GuiService:InspectPlayerFromUserId](https://developer.roblox.com/en-us/api-reference/function/GuiService/InspectPlayerFromUserId), allows the Inspect Menu to appear showing the user that has the given [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId). This is especially useful when you want to inspect players who aren't in the current game