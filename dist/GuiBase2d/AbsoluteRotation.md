AbsoluteRotation is a read-only property that describes the actual screen
rotation of a UI element, in degrees. This property,
[`GuiBase2d.AbsoluteSize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize) and [`GuiBase2d.AbsolutePosition`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsolutePosition) are
a group of properties that all describe the final rendered orientation of
a UI element. It composes (sums) each of the UI element's ancestors'
[`GuiObject.Rotation`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation) into one value. It does **not** perform bounds
checking, so its value may not be in the range 0 ≤ x < 360 degrees.

For example, if FrameA has a rotation of 40 degrees, and FrameB within it
has a [`GuiObject.Rotation`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation) of 50 degrees, then FrameB's
AbsoluteRotation would be 90 degrees.