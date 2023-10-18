This event fires from either a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) when
the parent of a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) or [`DragDetector`](https://create.roblox.com/docs/reference/engine/classes/DragDetector) is hovered
over by a player. This does not entail explicit interaction with the
detector, for which you can listen to either
[`MouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick) and
[`RightMouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#RightMouseClick) events.

Due to the nature of user input, you should not depend on all
[`MouseHoverEnter`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverEnter) events firing a
corresponding [`MouseHoverLeave`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverLeave) event.