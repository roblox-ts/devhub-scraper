GetInstanceRemoved is given a tag (a string) and returns a signal which
fires under two conditions:

- The tag is removed from an instance within the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) (game)
using [`CollectionService:RemoveTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#RemoveTag).
- An instance with the given tag is removed as a descendant of the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel), e.g. by un-setting [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) or
similar.

Subsequent calls to this method with the same tag return the same signal
object. The signal is useful for cleaning up resources used by objects
that once had tags, such as disconnecting connections.

See also [`CollectionService:GetInstanceAddedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceAddedSignal), which returns
an event that fires under similar conditions.