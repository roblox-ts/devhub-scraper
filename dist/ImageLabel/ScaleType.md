The ScaleType property determines in what way an [ImageLabel.Image](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#Image) is
rendered when the UI element's absolute size differs from the source
image's size.

By default, this property is
[Enum.ScaleType.Stretch](https://create.roblox.com/docs/reference/engine/classes/Enum/ScaleType/Stretch), which will simply
stretch/compact the image dimensions so it fits the UI element's space
exactly. Since transparent pixels are set to black when uploading to the
Roblox website, transparent images should apply alpha blending to avoid a
blackish outline around scaled images.

For [Enum.ScaleType.Slice](https://create.roblox.com/docs/reference/engine/classes/Enum/ScaleType/Slice), the
[ImageLabel.SliceCenter](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#SliceCenter) property will be revealed in the Properties
window. This is for nine-slice UI: when scaling up, the corners will
remain the source image size. The edges of the image will stretch to the
width/height of the image. Finally, the center of the image will stretch
to fill the center area of the image.

Finally, for [Enum.ScaleType.Tile](https://create.roblox.com/docs/reference/engine/classes/Enum/ScaleType/Tile), the
[ImageLabel.TileSize](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#TileSize) property will be revealed in the Properties window.
This is for tiled images, where the size of each image tile is determined
by the [ImageLabel.TileSize](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#TileSize) property.