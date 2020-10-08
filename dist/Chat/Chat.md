The Chat function fires the [Chat.Chatted](https://developer.roblox.com/en-us/api-reference/event/Chat/Chatted) event with the parameters specified in this method.

By default, there is a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) inside of each player's [PlayerScripts](https://developer.roblox.com/en-us/api-reference/class/PlayerScripts) object named _BubbleChat_, which causes a dialog-like billboard to appear above the _partOrCharacter_ when the chatted event is fired.

_Note:_ Since dialogs are controlled by a LocalScript, you will not be able to see any dialogs created from this method unless you are running in _Play Solo_ mode.