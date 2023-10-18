This function allows a developer to bring up the Inspect menu showing the
assets listed in this [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) object.

This allows further customization with what is shown in the Inspect Menu
when players inspect other players in your game. If your game modifies
what the players are wearing, you can instead give the Inspect Menu a
HumanoidDescription object that represents what a player is wearing and
those items will be shown. You should pass a name as well to represent the
name of the player that will be inspected.

See also:

- [Avatar Inspect Menu](https://create.roblox.com/docs/players/avatar-inspect-menu), an
article providing a more detailed explanation of the Inspect and Buy
feature and how it works
- [`GuiService:SetInspectMenuEnabled()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SetInspectMenuEnabled), allows developers to enable
or disable default Inspect and Buy functionality
- [`GuiService:InspectPlayerFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#InspectPlayerFromUserId), allows the Inspect Menu to
appear showing the user that has the given [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId).
This is especially useful when you want to inspect players who aren't in
the current game.