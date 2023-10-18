This property determines the user ID of the account whose character
appearance is used for a player's [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). By default,
this property is the [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId), which uses the player's avatar
as they have created it on the Roblox website.

Changing this property to the user ID of another account will cause the
player to spawn with that account's appearance (hats, shirt, pants, etc).

Games can also toggle whether or not a player's character appearance is
loaded in game by changing the
[`StarterPlayer.LoadCharacterAppearance`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#LoadCharacterAppearance) property.