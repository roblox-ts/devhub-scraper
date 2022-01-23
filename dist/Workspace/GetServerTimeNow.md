**GetServerTimeNow** returns the epoch time on the server with microsecond precision. The time is adjusted for drift and smoothed monotonically (it is guaranteed to be non-decreasing). The server clock progresses no faster than 1.006× speed and no slower than 0.994× speed.

This function is useful for creating synchronized experiences, as it has three properties necessary for doing so: it is a real-world time clock, is monotonic and has decent precision. Essentially, it is the client's best guess of what `os.clock` would return on the server.

This function relies on the server, so calling it from a core script on a client that isn't connected will throw an error.

See also
--------

*   [DistributedGameTime](https://developer.roblox.com/en-us/api-reference/property/Workspace/DistributedGameTime), a game-time clock
*   [`os.clock`](https://developer.roblox.com/api-reference/lua-docs/os)
*   [DateTime](https://developer.roblox.com/en-us/api-reference/datatype/DateTime)