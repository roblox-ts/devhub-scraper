StartCorner (`Enum.StartCorner`) determines from which corner the grid
starts laying out UI elements. The grid continues in the
[`UIGridStyleLayout.FillDirection`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#FillDirection), filling elements one by one until
[`UIGridLayout.FIllDirectionMaxCells`](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout#FIllDirectionMaxCells) cells have been laid out in
that row/column or if all the parent UI element's space has been occupied
by previous cells.

Above, the potion is the first [`ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel), followed by the gem and
the sword. The UIGridLayout is using a `Enum.StartCorner` of BottomRight.
The [`UIGridStyleLayout.FillDirection`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#FillDirection) is Horizontal.