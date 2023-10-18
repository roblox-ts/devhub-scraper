Reads one or more items from the queue as a single atomic operation.

This method does not automatically delete the returned items from the
queue but makes them invisible to other ReadAsync calls for the period of
the invisibility timeout. The items must be explicitly removed from the
queue with [`MemoryStoreQueue:RemoveAsync()`](https://create.roblox.com/docs/reference/engine/classes/MemoryStoreQueue#RemoveAsync) before the invisibility
timeout expires. The invisibility timeout defaults to 30 seconds unless a
different value was provided in [`MemoryStoreService:GetQueue()`](https://create.roblox.com/docs/reference/engine/classes/MemoryStoreService#GetQueue).