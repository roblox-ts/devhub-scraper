**Note** SurfaceGuis must be descendants of PlayerGui in order to know the
player who is interacting with it.Allows for the rendering of GUI elements
onto a part's surface in the 3D world, whilst allowing for basic user
interaction to occur.

##### Caching static UI for performance improvements

A Gui's appearance is cached until one of the following events occurs:

- A descendant is added to the Gui.
- A descendant is removed from the Gui.
- A property of a descendant of the Gui changes.
- A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next
frame it gets rendered.