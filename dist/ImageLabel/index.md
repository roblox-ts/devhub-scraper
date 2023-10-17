An ImageLabel renders a rectangle, like a [`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame) does, with an image.
The image must be a decal uploaded to the Roblox website. The display of the
image can be manipulated through the [`ImageLabel.ImageColor3`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageColor3) and
[`ImageLabel.ImageTransparency`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageTransparency) properties. To display only the image and
hide the rectangle, set [`GuiObject.BackgroundTransparency`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) to 1.

The image is scaled to fit the entirety of the rectangle, but remember that
images look best when displayed at their native resolution. Before uploading
your image asset, you may want to apply alpha bleeding and take a few more
steps when building UI for high-DPI devices (like phones).
## Advanced ImageLabel usage

- **Spritesheets** can be used with ImageLabel through the use of
[`ImageLabel.ImageRectOffset`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageRectOffset) and [`ImageLabel.ImageRectSize`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageRectSize).
Packing multiple images into one and using this property can make your
game's image assets load much quicker, especially if you use many small
icons in your GUIs.
- 9-slice images can be created by setting [`ImageLabel.ScaleType`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ScaleType) to
`Enum.ScaleType.Slice`, then [`ImageLabel.SliceCenter`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#SliceCenter) to the center
area of the 9-slice image.
- Tiled images can be created by setting [`ImageLabel.ScaleType`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ScaleType) to
`Enum.ScaleType.Tile`, then [`ImageLabel.TileSize`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#TileSize) to be the size of
rendered tiles.