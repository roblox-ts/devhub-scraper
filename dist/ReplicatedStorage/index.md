Complex games often require a range of assets that are held in storage until they're required. **ReplicatedStorage** is a container whose contents are replicated to all connected clients, allowing such objects to be stored until needed. ReplicatedStorage is also an ideal location for [RemoteFunctions](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) and [RemoteEvents](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) since they can be found on both the client and server.

Note these additional details about ReplicatedStorage:

*   Objects descending from ReplicatedStorage can be accessed from a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) on both the server and client.
*   Objects can be replicated to the client by parenting them to ReplicatedStorage:

object.Parent = game:GetService("ReplicatedStorage")  -- From the server

*   Although the client can access and modify ReplicatedStorage, these changes will not replicate to the server or other clients.
*   [Scripts](https://developer.roblox.com/en-us/api-reference/class/Script) and [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will not run when they are parented to ReplicatedStorage, although [ModuleScripts](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) contained within it can be accessed and executed. There are a number of alternative containers where client-side scripts will run, such as [StarterPlayerScripts](https://developer.roblox.com/en-us/api-reference/class/StarterPlayerScripts) and [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst).
*   For objects that only the server requires access to, we recommended you use [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage) to minimize network traffic.