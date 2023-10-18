This function returns whether the Inspect and Buy menu functionality is
currently enabled. The feature is enabled by default and can be set using
the [`GuiService:SetInspectMenuEnabled()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SetInspectMenuEnabled) function.

See also:

- [Avatar Inspect Menu](https://create.roblox.com/docs/players/avatar-inspect-menu), an
article providing a more detailed explanation of the Inspect and Buy
feature and how it works
- [`GuiService:InspectPlayerFromHumanoidDescription()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#InspectPlayerFromHumanoidDescription), allows a
developer to bring up the Inspect menu showing the assets listed in this
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) object. This is especially useful when what
is being worn on a player's avatar on the Roblox platform is not
necessarily the same as their in-game appearance
- [`GuiService:InspectPlayerFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/GuiService#InspectPlayerFromUserId), allows the Inspect Menu to
appear showing the user that has the given [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId).
This is especially useful when you want to inspect players who aren't in
the current game