This property determines the stroke's thickness, measured in pixels from the parent's outer edges.

![](https://developer.roblox.com/assets/blte2189b6f00c809b9/Outline-Thickness-4.png)

4

![](https://developer.roblox.com/assets/blt62d4cb5b19b1d1aa/Outline-Thickness-12.png)

12

Be mindful of tweening the Thickness property of a [UIStroke](https://developer.roblox.com/en-us/api-reference/class/UIStroke) applied to text objects. This renders and stores many glyph sizes each frame, potentially causing performance issues or text flickering.

See also
--------

For a more detailed walkthrough of the UIStroke object, take a look at the [Applying Strokes](../../../articles/applying-strokes) article.