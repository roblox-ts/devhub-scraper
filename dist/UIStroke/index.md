For a more detailed walkthrough of the UIStroke object, take a look at the [Applying Strokes](../../articles/applying-strokes) article.

An instance that applies an outline to text or a UI border. Key features include:

*   Adjust the color and thickness of the stroke outline.
*   Change the stroke transparency independently from the text or UI object.
*   Choose the corner style of the stroke (round, bevel, or miter).
*   Add a gradient to the stroke via the [UIGradient](https://developer.roblox.com/en-us/api-reference/class/UIGradient) instance.
*   Use rich text tags to add stroke to inline text segments.

Rich Text
---------

If your text object has `articles/gui rich text|rich text` enabled, you can control stroke properties on segments of the string via the `<stroke>` tag.

Property

Description

Default

`color`

Sets the stroke [color](#color-gradient).

`rgb(0, 0, 0)`

`joins`

Sets the [corner style](#corner-style). Can be set to `round`, `bevel`, or `miter`.

`round`

`thickness`

Sets the stroke [thickness](#thickness).

`1`

`transparency`

Sets the stroke [transparency](#transparency).

`0`

`The <font color="#c80032"><stroke color="#fcc633" thickness="4">dragon</stroke></font> is hungry`

![](https://developer.roblox.com/assets/blt2fa6854d87124e34/Stroke-RichText.png)