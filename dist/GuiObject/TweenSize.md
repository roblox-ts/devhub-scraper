Smoothly resizes a GUI to a new [`UDim2`](https://create.roblox.com/docs/reference/engine/datatypes/UDim2) in the specified time
using the specified [`Enum.EasingDirection`](https://create.roblox.com/docs/reference/engine/enums/EasingDirection) and [`Enum.EasingStyle`](https://create.roblox.com/docs/reference/engine/enums/EasingStyle).

This function will return whether the tween will play. Normally this will
always return true, but it will return false if another tween is active
and override is set to false.

See also:

- [`GuiObject:TweenPosition()`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenPosition), tweens a GUI's position
- [`GuiObject:TweenSizeAndPosition()`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSizeAndPosition), tweens a GUI's size and
position synchronously