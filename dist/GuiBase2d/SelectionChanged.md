This event fires when the selection changes within any descendants of the
connected GuiBase2d. When the selection highlight moves to a GuiObject,
the event bubbles from that GuiObject to all of its ancestors, informing
them that the selection has changed/entered/exited to a GuiObject in their
descendant tree.