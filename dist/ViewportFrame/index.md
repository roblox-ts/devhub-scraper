A **ViewportFrame** is a type of [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) that can render 3D
objects inside its bounds. This is a great way to display 3D objects/models in
a 2D GUI space like a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui). At the moment, no shadow or post
effects are available. Neon and Glass `Enum.Material|materials` will be
rendered on lowest quality. Nested GUIs aren't supported, which means
GuiObjects don't work as expected under ViewportFrame.

For a step-by-step walkthrough, see the [Frames](https://create.roblox.com/docs/ui/frames).