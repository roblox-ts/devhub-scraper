The TouchTap event fires when the player performs a tap gesture on the UI element using a touch-enabled device. A tap is a quick single touch without any movement involved (a longer press would fire [GuiObject.TouchLongPress](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchLongPress), and moving during the touch would fire [GuiObject.TouchPan](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPan) and/or [GuiObject.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchSwipe)). It fires with a table of [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2)s that describe the relative positions of the fingers involved in the gesture.

Since this event only requires one finger, this event can be simulated in Studio using the emulator and a mouse. Below is an example of TouchTap being fired on a Frame that is [GuiObject.Active](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Active). Below, the event fires when the cursor briefly pauses (to simulate a tap) and the Frame toggles its [GuiObject.BackgroundTransparency](https://developer.roblox.com/en-us/api-reference/property/GuiObject/BackgroundTransparency). The code for this can be found the code samples.

![TouchTap being fired on a Frame using Studio's emulator](https://developer.roblox.com/assets/blt248e4176c17eb486/GuiObjectTouchTapDemo.gif)

See also
--------

*   [GuiObject.TouchPan](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPan)
*   [GuiObject.TouchPinch](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchPinch)
*   [GuiObject.TouchRotate](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchRotate)
*   [GuiObject.TouchSwipe](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchSwipe)
*   [GuiObject.TouchLongPress](https://developer.roblox.com/en-us/api-reference/event/GuiObject/TouchLongPress)