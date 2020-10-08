The AddToBlockList [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function adds specified player's, by [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) to the player's block list.

Once a user is blocked, they can no longer:

*   Send you party invites
*   Chat with you
*   Send you private messages
*   Friend request you
*   Follow you into games
*   Trade with you
*   Send you clan invites
*   Send your group ally requests

Essentially, blocking someone cuts off all social features on [roblox.com](http://roblox.com). We're working on expanding the feature to in-game interactions, as well. If either you or the blocked individual attempt any of these actions, we'll display messages indicating that they're not available.

##Note  
Although this function cannot be used in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), players can also manage their block list at any time within the “Privacy” tab of the Account Settings page. For more information, see the article [here](https://blog.roblox.com/2014/10/take-control-of-who-can-interact-with-you-on-roblox-com/).