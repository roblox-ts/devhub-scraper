This method returns an array of the tags applied to the given instance, as
strings. You can add tags either in Studio in the
[Properties](https://create.roblox.com/docs/studio/properties) window or at runtime with
[`AddTag()`](https://create.roblox.com/docs/reference/engine/classes/Instance#AddTag).

This method is useful when you want to do something with multiple tags on
an instance at once. However, it is inefficient to use this method to
check for the existence of a single tag; instead, use
[`HasTag()`](https://create.roblox.com/docs/reference/engine/classes/Instance#HasTag) to check for a specific tag.