Smoothly moves a GUI to a new [UDim2](https://developer.roblox.com/en-us/api-reference/datatype/UDim2) position in the specified time using the specified [EasingDirection](https://developer.roblox.com/en-us/api-reference/enum/EasingDirection) and [EasingStyle](https://developer.roblox.com/en-us/api-reference/enum/EasingStyle).

This function will return whether the tween will play. It will not play if another tween is acting on the [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject) and the override parameter is false.

See also
--------

*   [GuiObject:TweenSize](https://developer.roblox.com/en-us/api-reference/function/GuiObject/TweenSize), tweens a GUI's size
*   [GuiObject:TweenSizeAndPosition](https://developer.roblox.com/en-us/api-reference/function/GuiObject/TweenSizeAndPosition), tweens a GUI's size and position synchronously