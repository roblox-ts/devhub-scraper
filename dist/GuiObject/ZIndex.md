This property determines the order in which a [GUI](https://developer.roblox.com/en-us/api-reference/class/GuiObject) renders to the screen relative to other GUIs.

By default, GUIs render in ascending priority order where lower values are rendered first. As a result, GUIs with lower ZIndex values appear under higher values. You can change the render order by changing the value of `ScreenGui.ZIndexBehavior`.

The range of valid values is -MAX\_INT to MAX\_INT, inclusive (2,147,483,647 or (2^31 - 1)). If you are unsure if you will need to layer an element between two already-existing elements in the future, it can be a good idea to use multiples of 100, i.e. 0, 100, 200. This ensures a large gap of ZIndex values you can use for elements rendered in-between other elements.

See also
--------

*   [GuiObject.LayoutOrder](https://developer.roblox.com/en-us/api-reference/property/GuiObject/LayoutOrder), which controls the sort order of a GUI when used with a [UIGridStyleLayout](https://developer.roblox.com/en-us/api-reference/class/UIGridStyleLayout) instead of render order.