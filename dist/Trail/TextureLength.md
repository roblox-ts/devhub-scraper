This property determines how [Trail.Texture](https://create.roblox.com/docs/reference/engine/classes/Trail#Texture)s are drawn by [Trail](https://create.roblox.com/docs/reference/engine/classes/Trail). The
behavior of TextureLength is determined by the [Trail.TextureMode](https://create.roblox.com/docs/reference/engine/classes/Trail#TextureMode) of its
trail.

If the TextureLength is changed after its trail has drawn some of its
segments, the new length will only be applied to new segments being drawn
-- old segments will be unaffected.

This value can be any number greater than 0 and defaults to 1.