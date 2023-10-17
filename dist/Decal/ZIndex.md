**ZIndex** determines the order in which decals on the same
[`Face`](https://create.roblox.com/docs/reference/engine/classes/Decal#Face) of a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are rendered. Decals are
rendered in **ascending** priority order, where lower values are rendered
first. Therefore, a decal with a higher ZIndex renders later (and on top
of) other Decals with lower ZIndex.

The range of valid values is -MAX_INT to MAX_INT, inclusive (2,147,483,647
or (2^31 - 1)). If you are unsure if you will need to layer an decal
between two already-existing decals in the future, it can be a good idea
to use multiples of 100, i.e. 0, 100, 200. This ensures a large gap of
ZIndex values you can use for elements rendered in-between other elements.

See also:

- [`GuiObject.ZIndex`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ZIndex), a property which behaves similarly, but for
GUI elements