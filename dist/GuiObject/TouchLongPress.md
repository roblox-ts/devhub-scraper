The TouchLongPress event fires after a brief moment when the player holds their finger on the UI element using a touch-enabled device. It fires with a table of [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) that describe the relative screen positions of the fingers involved in the gesture. In addition, it fires multiple times with multiple [UserInputState](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)s: Begin after a brief delay, Change if the player moves their finger during the gesture and finally with End. The delay is platform dependent; in Studio it is a little longer than one second.

Since this event only requires one finger, this event can be simulated in Studio using the emulator and a mouse.

Below is an example of TouchLongPress firing on a Frame that is [GuiObject.Active](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Active). Below, the event fires after a brief delay (Begin) and then continually as as the finger is moved (Change). It fires one last time after it is released (End).

![TouchLongPress gesture](https://developer.roblox.com/assets/blt072ee7f898e2b645/GuiObjectTouchLongPressDemo.gif)

See also
--------

*   [UserInputService.TouchLongPress](https://developer.roblox.com/en-us/api-reference/event/UserInputService/TouchLongPress), an event with the same functionality but is not restricted to a specific [GUI](https://developer.roblox.com/en-us/api-reference/class/GuiObject)
*   [GuiObject.TouchPan](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPan)
*   [GuiObject.TouchPinch](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPinch)
*   [GuiObject.TouchRotate](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchRotate)
*   [GuiObject.TouchTap](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchTap)
*   [GuiObject.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchSwipe)