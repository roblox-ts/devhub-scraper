**GetServerTimeNow** returns the epoch time on the server with microsecond precision. The value returned by this function is adjusted for drift and smoothed monotonically, ie, it is guaranteed to be nondecreasing. This clock will progress no faster than 1.006× speed and no slower than 0.994× speed.

This function is useful for creating synchronized experiences, as it has three properties necessary for doing so: it is a real-world time clock, is monotonic and has decent precision. Essentially, it is the clients best guess of what `os.clock` would return on the server.

As this function relies on the server, calling it on a client before it has connected will throw an error.

See also
--------

*   [DistributedGameTime](https://developer.roblox.com/en-us/api-reference/property/Workspace/DistributedGameTime), a game-time clock
*   `os.clock`
*   `DateTime.now`