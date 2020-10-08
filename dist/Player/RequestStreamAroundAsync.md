For games where [StreamingEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled) is set to **true**, requests that the server stream to the player regions (parts and terrain) around the specified **X**, **Y**, **Z** location in the game world. It is useful if the game knows that the player's [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) will be set to the specified location in the near future. Without providing the location with this call, the player may not have streamed in content for the destination, resulting in a streaming pause or other undesirable behavior.

The effect of this call will be temporary and there are no guarantees of what will be streamed in around the specified location. Client memory limits and network conditions may impact what will be available on the client.

##### Usage Precaution

Requesting streaming around an area is **not a guarantee** that the content will be present when the request completes, as streaming is affected by the client's network bandwidth, memory limitations, and other factors.

For more details, see the `articles/content streaming|Game Content Streaming` article.