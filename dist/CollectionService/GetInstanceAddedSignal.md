GetInstanceAdded is given a tag (a string) and returns a signal which
fires under two conditions:

- The tag is assigned to an instance within the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) (game)
using [`CollectionService:AddTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#AddTag).
- An instance with the given tag is added as a descendant of the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel), e.g. by setting [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) or similar.

Subsequent calls to this method with the same tag return the same signal
object. Consider also calling [`CollectionService:GetTagged()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetTagged) to get
a list of objects that already have a tag (and thus won't fire the event
if they already are in the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel)).

See also [`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal), which
returns an event that fires under similar conditions.