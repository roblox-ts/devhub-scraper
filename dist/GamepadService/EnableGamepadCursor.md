This function enables the gamepad cursor if it's currently disabled. If
the cursor is already enabled, calling the API updates the cursor's
position. The function accepts a [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) parameter,
but there are some invalid cases.

    | Input GuiObject | Cursor Starting Position |
| `Nil` | Default position |
| Not a GuiObject | Cursor does not appear, errors |  |
| Not a child of BasePlayerGui | Cursor does not appear, errors |
| GuiObject has Visible 2 set to false or any parent visible set 
          to false | Default position with warning |
| Child of ScreenGui 1 with Enabled 1 set to false | Default position with warning |
| Child of BillboardGui 4 or SurfaceGui | Default position with warning |
| GuiObject outside the viewport (Or, any part of the gui object 
        that is off screen) | Default position with warning |
| Child of ScrollingFrame with clipping set to false: GuiObject 
        outside of scrolling frame (Object child of scrolling frame and 
        not visible on screen) | Default position with warning |
| Child of ScrollingFrame with clipping set to true: GuiObject 
        outside scrolling frame window but inside viewport | GuiObject moves into the scrolling frame and starts the cursor 
        centered over the object |
| GuiObject inside the frame and visible | Cursor starts centered on the GuiObject |