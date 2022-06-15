This event fires when the player moves their finger on the UI element using a touch-enabled device. It fires shortly before [GuiObject.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchSwipe) would, and does not fire with [GuiObject.TouchTap](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchTap). This event is useful for allowing the player to manipulate the position of UI elements on the screen.

This event fires with a table of [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) that describe the relative screen positions of the fingers involved in the gesture. In addition, it fires several times with multiple [UserInputState](https://developer.roblox.com/en-us/api-reference/enum/UserInputState)s: Begin after a brief delay, Change when the player moves their finger during the gesture and finally once more with End.

This event cannot be simulated in Studio using the emulator and a mouse; you must have a real touch enabled device to fire this event.

Below is an animation of TouchPan firing on the black semitransparent [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame) that covers the screen. The event is being used to manipulate the position of the pink inner [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame). The code for this can be found in the code samples.

![TouchPan firing on a real touch-enabled device](https://developer.roblox.com/assets/bltd08f63e0a28873f4/GuiObjectTouchPanDemo.gif)

See also
--------

*   [GuiObject.TouchPinch](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPinch)
*   [GuiObject.TouchRotate](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchRotate)
*   [GuiObject.TouchTap](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchTap)
*   [GuiObject.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchSwipe)
*   [GuiObject.TouchLongPress](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchLongPress)