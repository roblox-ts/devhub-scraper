**GetNetworkPing** returns the engine-calculated latency of the
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) in seconds. "Ping" is a measurement of the time taken for
data to be sent from the client to the server, then back again. For
client-side [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), this function may only be
called on the [`LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer). This function is
useful in identifying and debugging issues that occur in high-latency
scenarios. It can also be used in masking latency, such as adjusting the
speed of throwing animations for projectiles.