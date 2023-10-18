**Clone** creates a copy of an object and all of its descendants, ignoring
all objects that are not [`Archivable`](https://create.roblox.com/docs/reference/engine/classes/Instance#Archivable). The copy
of the root object is returned by this function and its
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is set to nil.

If a reference property such as [`ObjectValue.Value`](https://create.roblox.com/docs/reference/engine/classes/ObjectValue#Value) is set in a
cloned object, the value of the copy's property depends on original's
value:

- If a reference property refers to an object that was **also** cloned, an
*internal reference*, the copy will refer to the copy.
- If a reference property refers to an object that was **not** cloned, an
*external reference*, the same value is maintained in the copy.

This function is typically used to create models that can be regenerated.
First, get a reference to the original object. Then, make a copy of the
object and insert the copy by setting its [`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent)
to the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) or one of its descendants. Finally, when it's
time to regenerate the model, [`Destroy`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) the copy
and clone a new one from the original like before.