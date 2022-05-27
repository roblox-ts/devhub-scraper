For a more detailed walkthrough of the UIStroke object, take a look at the
<a href="../..https://developer.roblox.com/articles/applying-strokes">Applying
Strokes</a> article.

An instance that applies an outline to text or a UI border. Key features
include:

- Adjust the color and thickness of the stroke outline.
- Change the stroke transparency independently from the text or UI object.
- Choose the corner style of the stroke (round, bevel, or miter).
- Add a gradient to the stroke via the [UIGradient](https://create.roblox.com/docs/reference/engine/classes/UIGradient) instance.
- Use rich text tags to add stroke to inline text segments.

## Rich Text

If your text object has [rich text](/building-and-visuals/ui/rich-text)
enabled, you can control stroke properties on segments of the string via the
`<stroke>` tag.

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>color</code></td>
            <td>Sets the stroke <a href="#color-gradient">color</a>.</td>
            <td><code>rgb(0, 0, 0)</code></td>
        </tr>
        <tr>
            <td><code>joins</code></td> 
            <td>Sets the <a href="#corner-style">corner style</a>. Can be set to <code>round</code>, <code>bevel</code>, or
            <code>miter</code>.</td> 
            <td><code>round</code></td>
        </tr>
        <tr>
            <td><code>thickness</code></td>
            <td>Sets the stroke <a href="#thickness">thickness</a>.</td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td><code>transparency</code></td>
            <td>Sets the stroke <a href="#transparency">transparency</a>.</td>
            <td><code>0</code></td>
        </tr>
    </tbody>
</table>

```html
The <font color="#c80032"><mark
  ><stroke color="#fcc633" thickness="4">dragon</stroke></mark
></font> is hungry.
```

<img src="https://prod.docsiteassets.roblox.com/assets/blt2fa6854d87124e34/Stroke-RichText.png" />