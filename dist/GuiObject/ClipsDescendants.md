This property determines if a [GUI](https://create.roblox.com/docs/reference/engine/classes/GuiObject) will _clip_ (or make
invisible) any portion of descendant GUI elements that would otherwise
render outside the bounds of the rectangle. Further descendant GUI
elements can also use ClipsDescendants. The behavior is similar to a
[ScrollingFrame](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame).

Note that [GuiObject.Rotation](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation) isn't supported by this property. If this
or any ancestor GUI has a **non-zero** [GuiObject.Rotation](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Rotation), this property
is **ignored** and descendant GUI elements will be rendered regardless of
this property's value.

The gif and code sample below demonstrate how to enabled and disable the
property using a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript). They also illustrate the affects the
property has on descendant GUI elements.

```lua
while true do
	script.Parent.ClipDescendants = true
	wait(2)
	script.Parent.ClipDescendants = false
	wait(2)
end
```

![ClipDescendants Demo][1]

In the gif below, the element labelled _Parent_ toggles between
ClipsDescendants enabled and disabled every two seconds. The elements
labelled _Child_ are descendants of `Parent` that are affected by changing
the property. Also note that the rotated _Child_ element is not affected
by the property.

[1]: https://prod.docsiteassets.roblox.com/assets/bltaf6f1a7233b2f3d8/ClipDescendantsDemo.gif