An [`Actor`](https://create.roblox.com/docs/reference/engine/classes/Actor) is a container for code that can be safely split into its own
thread using `Library.task.desynchronize()`. It should also contain the
instances used by its scripts.

To learn more about using multiple Actors to optimize script performance, see
[Parallel Luau](https://create.roblox.com/docs/scripting/multithreading).