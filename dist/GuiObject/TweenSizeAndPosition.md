Smoothly resizes and moves a GUI to a new [UDim2](https://developer.roblox.com/en-us/api-reference/datatype/UDim2) size and position in the specified time using the specified [EasingDirection](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection) and [EasingStyle](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle).

This function will return whether the tween will play. Normally this will always return true, but it will return false if another tween is active and override is set to false.

See also
--------

*   [GuiObject:TweenSize](https://developer.roblox.com/en-us/api-reference/function/GuiObject/TweenSize), tweens a GUI's size
*   [GuiObject:TweenPosition](https://developer.roblox.com/en-us/api-reference/function/GuiObject/TweenPosition), tweens a GUI's position