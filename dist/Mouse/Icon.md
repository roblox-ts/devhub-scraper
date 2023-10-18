**Icon** is a property that determines the image used as the pointer. If
blank, a default arrow is used. While the cursor hovers over a
[`GuiButton`](https://create.roblox.com/docs/reference/engine/classes/GuiButton), this property is temporarily ignored.

To hide the cursor entirely, **do not** use a transparent image –
instead, set [`UserInputService.MouseIconEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseIconEnabled) to false.

For getting/setting the user mouse icon in experiences, you should use
[`UserInputService.MouseIcon`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#MouseIcon). [`Mouse.Icon`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Icon) will be deprecated
after the new API for plugins to set the mouse cursor is released.
#### Designing a Cursor

The following guidelines may prove useful when creating your own mouse
cursors:

- The dimensions of the image used determines the size of the cursor.
- The **center** of the image is where mouse inputs are issued.
- The default mouse image is 64x64 pixels, with the mouse taking up 17x24
pixels of space.

#### System Cursors for [`PluginMouse`](https://create.roblox.com/docs/reference/engine/classes/PluginMouse)

When using a [`PluginMouse`](https://create.roblox.com/docs/reference/engine/classes/PluginMouse) retrieved from [`Plugin:GetMouse()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetMouse),
you can use the following icons similar to your system's default cursors,
such as hands, arrows, I-beams, etc. You can use these with GUI events
like [`MouseEnter`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseEnter),
[`MouseLeave`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseLeave), and
[`MouseButton1Down`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Down) to provide a
consistent studio experience when interacting with certain kinds of GUI
components. Note that these only work for studio plugins; they will not
work for other [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) objects.
| Look* | Asset | Suggested Use |
| - | - | - |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-Pointer.png) | `rbxasset://SystemCursors/Arrow` | Default clicking and selection. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-PointingHand.png) | `rbxasset://SystemCursors/PointingHand` | Hovering over an active link/button. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-OpenHand.png) | `rbxasset://SystemCursors/OpenHand` | Hovering over a draggable item. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-GrabbingHand.png) | `rbxasset://SystemCursors/ClosedHand` | Dragging an item. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-IBeam.png) | `rbxasset://SystemCursors/IBeam` | Hovering in a text field. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeNS.png) | `rbxasset://SystemCursors/SizeNS` | Hovering over a vertical resize handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeEW.png) | `rbxasset://SystemCursors/SizeEW` | Hovering over a horizontal resize handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeNESW.png) | `rbxasset://SystemCursors/SizeNESW` | Hovering over a corner resize handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeNWSE.png) | `rbxasset://SystemCursors/SizeNWSE` | Hovering over a corner resize handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeAll.png) | `rbxasset://SystemCursors/SizeAll` | Hovering over a multi-direction resize handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeSplitV.png) | `rbxasset://SystemCursors/SplitNS` | Hovering over a vertical "split" handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-ResizeSplitH.png) | `rbxasset://SystemCursors/SplitEW` | Hovering over a horizontal "split" handle. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-Forbidden.png) | `rbxasset://SystemCursors/Forbidden` | Hovering over a locked/forbidden item. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-Wait.png) | `rbxasset://SystemCursors/Wait` | Indicating an action is in progress. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-Busy.png) | `rbxasset://SystemCursors/Busy` | Indicating the system is busy. |
| ![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Mouse-Icon-Crosshair.png) | `rbxasset://SystemCursors/Cross` | Hovering over a pinpoint selection area. |

* These appearances are approximations – the actual look is
dependent on your operating system.