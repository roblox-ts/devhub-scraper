LayerCollector is an abstract class inherited by 2D Gui Objects which render [GuiObjects](https://developer.roblox.com/en-us/api-reference/class/GuiObject) in layers.

##### Caching static UI for performance improvements

A Gui's appearance is cached until one of the following events occurs:*   A descendant is added to the Gui.
*   A descendant is removed from the Gui.
*   A property of a descendant of the Gui changes.
*   A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next frame it gets rendered.