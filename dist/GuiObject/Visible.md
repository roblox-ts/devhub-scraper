This property determines whether a [GUI](https://create.roblox.com/docs/reference/engine/classes/GuiObject) will render shapes,
images and/or text on screen. If set to false, the GUI and all of its
descedants (children) will not render.

The rendering of individual components of a GUI can be controlled
individually through transparency properties such as
[GuiObject.BackgroundTransparency](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency), [TextLabel.TextTransparency](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextTransparency) and
[ImageLabel.ImageTransparency](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageTransparency).

When this property is true, the GUI will be ignored by [UIGridStyleLayout](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout)
objects (such as [UIGridLayout](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout), [UIListLayout](https://create.roblox.com/docs/reference/engine/classes/UIListLayout) and [UITableLayout](https://create.roblox.com/docs/reference/engine/classes/UITableLayout)). In
other words, the space that the element would otherwise occupy in the
layout is used by other elements instead.