This property determines the stroke's thickness, measured in pixels from
the parent's outer edges.

![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Outline-Thickness-4.png)
4

![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Outline-Thickness-12.png)
12

Be mindful of tweening the Thickness property of a `UIStroke`
applied to text objects. This renders and stores many glyph sizes each
frame, potentially causing performance issues or text flickering.

For more details on the **UIStroke** object, see
[here](https://create.roblox.com/docs/ui/layout-and-appearance#uistroke).