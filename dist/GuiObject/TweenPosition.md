Smoothly moves a GUI to a new [`UDim2`](https://create.roblox.com/docs/reference/engine/datatypes/UDim2) position in the specified
time using the specified [`Enum.EasingDirection`](https://create.roblox.com/docs/reference/engine/enums/EasingDirection) and [`Enum.EasingStyle`](https://create.roblox.com/docs/reference/engine/enums/EasingStyle).

This function will return whether the tween will play. It will not play if
another tween is acting on the [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) and the override
parameter is false.

See also:

- [`GuiObject:TweenSize()`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSize), tweens a GUI's size
- [`GuiObject:TweenSizeAndPosition()`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSizeAndPosition), tweens a GUI's size and
position synchronously