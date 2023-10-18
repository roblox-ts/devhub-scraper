FillEmptySpaceRows determines whether cells' Y size are set such that the
entire vertical space of the parent UI element is used. Enabling this is
useful for making sure your table takes up a more easily predictable
amount of vertical space (the Y-axis size of the parent UI element). It is
still possible that a [`UISizeConstraint`](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint) applied to cells will cause
underflow/overflow.

When enabling this property, the row heights will be approximately equal
to the parent's [`GuiBase2d.AbsoluteSize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize).Y component divided by the
number of rows (not accounting for padding or other factors).