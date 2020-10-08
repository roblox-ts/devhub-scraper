**Icon** is a property that determines the image used as the pointer. If blank, a default arrow is used. While the cursor hovers over a [GuiButton](https://developer.roblox.com/en-us/api-reference/class/GuiButton), this property is temporarily ignored.

To hide the cursor entirely, **do not** use a transparent image – instead, set [UserInputService.MouseIconEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseIconEnabled) to false. For more information on how to change the mouse's icon, please see `Articles/Mouse Icon Appearance|this tutorial`.

Designing a Cursor
------------------

The following guidelines may prove useful when creating your own mouse cursors:

*   The dimensions of the image used determines the size of the cursor.
*   The **center** of the image is where mouse inputs are issued.
*   The default mouse image is 64x64 pixels, with the mouse taking up 17x24 pixels of space.

System Cursors for [PluginMouse](https://developer.roblox.com/en-us/api-reference/class/PluginMouse)
----------------------------------------------------------------------------------------------------

When using a [PluginMouse](https://developer.roblox.com/en-us/api-reference/class/PluginMouse) retrieved from [Plugin:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetMouse), you can use the following icons similar to your system's default cursors, such as hands, arrows, I-beams, etc. You can use these with GUI events like [MouseEnter](https://developer.roblox.com/en-us/api-reference/event/GuiObject/MouseEnter), [MouseLeave](https://developer.roblox.com/en-us/api-reference/event/GuiObject/MouseLeave), and [MouseButton1Down](https://developer.roblox.com/en-us/api-reference/event/GuiButton/MouseButton1Down) to provide a consistent studio experience when interacting with certain kinds of GUI components. Note that these only work for studio plugins; they will not work for other [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) objects.

Look\*

Asset

Suggested Use

![](https://developer.roblox.com/assets/blt4482654ef91a9008/Mouse-Icon-Pointer.png)

`rbxasset://SystemCursors/Arrow`

Default clicking and selection.

![](https://developer.roblox.com/assets/bltc2bdf42fc1ed250d/Mouse-Icon-PointingHand.png)

`rbxasset://SystemCursors/PointingHand`

Hovering over an active link/button.

![](https://developer.roblox.com/assets/blt9a60df866240a5e9/Mouse-Icon-OpenHand.png)

`rbxasset://SystemCursors/OpenHand`

Hovering over a draggable item.

![](https://developer.roblox.com/assets/blte5d3e06e06fab88c/Mouse-Icon-GrabbingHand.png)

`rbxasset://SystemCursors/ClosedHand`

Dragging an item.

![](https://developer.roblox.com/assets/blt79a362eb3c601381/Mouse-Icon-IBeam.png)

`rbxasset://SystemCursors/IBeam`

Hovering in a text field.

![](https://developer.roblox.com/assets/blt47428ee42664d002/Mouse-Icon-ResizeNS.png)

`rbxasset://SystemCursors/SizeNS`

Hovering over a vertical resize handle.

![](https://developer.roblox.com/assets/blt3f97374ddb823581/Mouse-Icon-ResizeEW.png)

`rbxasset://SystemCursors/SizeEW`

Hovering over a horizontal resize handle.

![](https://developer.roblox.com/assets/blt893bc2edd5c09e54/Mouse-Icon-ResizeNESW.png)

`rbxasset://SystemCursors/SizeNESW`

Hovering over a corner resize handle.

![](https://developer.roblox.com/assets/blt07969d143abbdc1d/Mouse-Icon-ResizeNWSE.png)

`rbxasset://SystemCursors/SizeNWSE`

Hovering over a corner resize handle.

![](https://developer.roblox.com/assets/blt4edcc341574209f2/Mouse-Icon-ResizeAll.png)

`rbxasset://SystemCursors/SizeAll`

Hovering over a multi-direction resize handle.

![](https://developer.roblox.com/assets/blt2c229bc59095b65b/Mouse-Icon-ResizeSplitV.png)

`rbxasset://SystemCursors/SplitNS`

Hovering over a vertical "split" handle.

![](https://developer.roblox.com/assets/blt55e74af96d16bf13/Mouse-Icon-ResizeSplitH.png)

`rbxasset://SystemCursors/SplitEW`

Hovering over a horizontal "split" handle.

![](https://developer.roblox.com/assets/blte2400cb5f4fbf76b/Mouse-Icon-Forbidden.png)

`rbxasset://SystemCursors/Forbidden`

Hovering over a locked/forbidden item.

![](https://developer.roblox.com/assets/bltde507fd6476b6cd3/Mouse-Icon-Wait.png)

`rbxasset://SystemCursors/Wait`

Indicating an action is in progress.

![](https://developer.roblox.com/assets/bltae7412bfdbad51d1/Mouse-Icon-Busy.png)

`rbxasset://SystemCursors/Busy`

Indicating the system is busy.

![](https://developer.roblox.com/assets/blt512ea5431f8546e6/Mouse-Icon-Crosshair.png)

`rbxasset://SystemCursors/Cross`

Hovering over a pinpoint selection area.

\* These appearances are approximations – the actual look is dependent on your operating system.