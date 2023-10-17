Controls how [`GuiObject.ZIndex`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ZIndex) behaves on all descendants of the
LayerCollector.

`Enum.ZIndexBehavior.Global` sorts all descendants according to the
ZIndex, then breaks ties using the hierarchy order. As a result,
descendants of a [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) need to have a ZIndex value that's at
least as high as the parent, or they will render underneath their parent.

With `Enum.ZIndexBehavior.Sibling`, children always render above their
parents, and the ZIndex is used to decide the order in which children of a
single UI object will render over each other.