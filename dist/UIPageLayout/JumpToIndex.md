If the index is `>= 0` and less than the size of the layout, this method
acts like [`UIPageLayout:JumpTo()`](https://create.roblox.com/docs/reference/engine/classes/UIPageLayout#JumpTo). If it's out of bounds and
circular is set, it will animate the full distance between the in-bounds
index of [`UIPageLayout.CurrentPage`](https://create.roblox.com/docs/reference/engine/classes/UIPageLayout#CurrentPage) and the new index.