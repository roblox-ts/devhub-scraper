This event fires from either a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) when
a player's cursor hovers off the parent of a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) or
[`DragDetector`](https://create.roblox.com/docs/reference/engine/classes/DragDetector). This does not entail explicit interaction with the
detector, for which you can listen to either
[`MouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick) and
[`RightMouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#RightMouseClick) events.

Due to the nature of user input, you should not depend on all
[`MouseHoverLeave`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverLeave) events firing after
a corresponding [`MouseHoverEnter`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverEnter)
event.