This event is a signal invoked when a player has closed the game invite prompt and batches all users and conversation participants into a single array. This prompt can be prompted by the developer or accessed from the SettingsHub menu.

### How Game Invites Work

*   User joins a game and presses a developer-constructed button. Activating the button will invoke [PromptGameInvite(localPlayer)](https://developer.roblox.com/en-us/api-reference/function/SocialService/PromptGameInvite).

![](https://developer.roblox.com/assets/blt1db52ca2f16787a5/inviteFlow1.png)

*   This function call will fire a [rbx::signal](https://developer.roblox.com/en-us/api-reference/datatype/RBXScriptSignal) (called [SocialService.PromptInviteRequested](https://developer.roblox.com/en-us/api-reference/event/SocialService/PromptInviteRequested)). The [CoreScripts](https://developer.roblox.com/en-us/api-reference/class/CoreScript) are bound to this signal through Reflection and once invoked will show the user a version of the following screen:

![](https://developer.roblox.com/assets/blte2b2aeda3da94cb2/inviteFlow2.png)

*   When the user successfully sends an invite, a rbx::signal will fire on the client and server (called SocialService.PromptInviteRequested).

![](https://developer.roblox.com/assets/blt5cf97ed8610dbc49/inviteFlow3.png)

### See also

This is part of the [SocialService](https://developer.roblox.com/en-us/api-reference/class/SocialService) class containing a set of APIs that allow you to integrate game invitations into your games.

*   [SocialService:PromptGameInvite](https://developer.roblox.com/en-us/api-reference/function/SocialService/PromptGameInvite), prompts the specified player with the game invite screen
*   [SocialService:CanSendGameInviteAsync](https://developer.roblox.com/en-us/api-reference/function/SocialService/CanSendGameInviteAsync), returns true or false depending on the user