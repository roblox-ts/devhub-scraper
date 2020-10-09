The MouseHoverEnter event fires when the player's [mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) begins hovering over the [ClickDetector](https://developer.roblox.com/en-us/api-reference/class/ClickDetector)'s parent. This event fires when using either a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

Due to the nature of user input, you ought not depend on all MouseHoverEnter events to fire a matching [MouseHoverLeave](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverLeave) event.

The player does not have to click the ClickDetector for this event to fire. If you want an event to execute when the player clicks, you can use [ClickDetector.MouseClick](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseClick) and [ClickDetector.RightMouseClick](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/RightMouseClick) events.