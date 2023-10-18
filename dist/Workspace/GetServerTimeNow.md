**GetServerTimeNow** returns the epoch time on the server with microsecond
precision. The time is adjusted for drift and smoothed monotonically (it
is guaranteed to be non-decreasing). The server clock progresses no faster
than 1.006× speed and no slower than 0.994× speed.

This function is useful for creating synchronized experiences, as it has
three properties necessary for doing so: it's a real-world time clock,
it's monotonic, and it has decent precision.

This function relies on the server, so calling it from a client that isn't
connected will throw an error.

See also:

- [`DistributedGameTime`](https://create.roblox.com/docs/reference/engine/classes/Workspace#DistributedGameTime), a game-time
clock
- `Library.os|os.time()`
- [`DateTime`](https://create.roblox.com/docs/reference/engine/datatypes/DateTime)