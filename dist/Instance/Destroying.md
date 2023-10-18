The Destroying event fires immediately before the Instance or one of its
ancestors is destroyed with `Instance.Destroy()`.

The Instance will never be deleted from memory while a connected function
is still using it. However, if the function yields at any point, the
Instance and its descendants will be parented to `nil`.

When deleting an instance in Studio, such as manually deleting through the
Explorer or through a plugin, the instance isn't destroyed. Instead, the
parent is set to `nil` which you can track with
[`Instance.AncestryChanged`](https://create.roblox.com/docs/reference/engine/classes/Instance#AncestryChanged).