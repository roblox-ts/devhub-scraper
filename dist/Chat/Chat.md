The Chat function fires the [`Chat.Chatted`](https://create.roblox.com/docs/reference/engine/classes/Chat#Chatted) event with the parameters
specified in this method.

By default, there is a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) inside of each player's
[`PlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts) object named *BubbleChat*, which causes a
dialog-like billboard to appear above the *partOrCharacter* when the
chatted event is fired.

*Note:* Since dialogs are controlled by a LocalScript, you will not be
able to see any dialogs created from this method unless you are running in
*Play Solo* mode.