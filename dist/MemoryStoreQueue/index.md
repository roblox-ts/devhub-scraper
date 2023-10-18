Provides access to a queue within MemoryStore. A queue is a data structure
that provides temporary storage for arbitrary items (up to the maximum item
size; see
[MemoryStore Limits](https://create.roblox.com/docs/cloud-services/memory-stores#limits-and-quotas).
Each queue item has a numeric priority: MemoryStore retrieves items with
higher priority from the queue first, and it retrieves Items with the same
priority in order of addition.

Items in the queue can optionally be set to expire after a certain amount of
time. Expired items simply disappear from the queue as if they were never
added.