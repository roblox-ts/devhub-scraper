For games where [`StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) is set
to **true**, requests that the server stream to the player regions (parts
and terrain) around the specified **X**, **Y**, **Z** location in the game
world. It is useful if the game knows that the player's [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)
will be set to the specified location in the near future. Without
providing the location with this call, the player may not have streamed in
content for the destination, resulting in a streaming pause or other
undesirable behavior.

The effect of this call will be temporary and there are no guarantees of
what will be streamed in around the specified location. Client memory
limits and network conditions may impact what will be available on the
client.

See
[Requesting Area Streaming](https://create.roblox.com/docs/workspace/streaming#requesting-area-streaming)
for details.
##### Usage Precaution

Requesting streaming around an area is **not a guarantee** that the
content will be present when the request completes, as streaming is
affected by the client's network bandwidth, memory limitations, and other
factors.