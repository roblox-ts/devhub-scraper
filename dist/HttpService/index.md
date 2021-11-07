**HttpService** allows HTTP requests to be sent from game servers using [RequestAsync](https://developer.roblox.com/en-us/api-reference/function/HttpService/RequestAsync), [GetAsync](https://developer.roblox.com/en-us/api-reference/function/HttpService/GetAsync) and [PostAsync](https://developer.roblox.com/en-us/api-reference/function/HttpService/PostAsync). This service allows games to be integrated with off-Roblox web services such as analytics, data storage, remote server configuration, error reporting, advanced calculations or real-time communication.

Enabling HTTP Requests
----------------------

Request-sending functions aren't enabled by default: attempting to use them while disabled will result in the error “Http requests are not enabled. Enable via game settings”. To send requests, set [HttpEnabled](https://developer.roblox.com/en-us/api-reference/property/HttpService/HttpEnabled) to true through the Game Settings interface (under the Security section) or the Command Bar (for unpublished games). This property cannot be interacted with at runtime.

\-- For unpublished games, use this in the Command Bar:
game:GetService("HttpService").HttpEnabled = true

Other Functions
---------------

HttpService also houses the [JSONEncode](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONEncode) and [JSONDecode](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONDecode) functions, which are useful for communicating with services that use the [JSON](https://json.org) format. In addition, the [GenerateGUID](https://developer.roblox.com/en-us/api-reference/function/HttpService/GenerateGUID) function provides random 128-bit labels, which can be treated as probabilistically unique in a variety of scenarios.

Use in Plugins
--------------

HttpService can also be used by Roblox Studio plugins. They may do this to check for updates, send usage data, download content or other business logic. The first time a plugin attempts to do this, the user may be prompted to give the plugin permission to communicate with the particular web address. A user may accept, deny and revoke such permissions at any time through the Plugin Management window.

Plugins may also communicate with other software running on the same computer through the `localhost` and `127.0.0.1` hosts. By running programs compatible with such plugins, you can extend the functionality of your plugin beyond the normal capabilities of Roblox Studio, such as interacting with your computer's file system. Beware that such software must be distributed separately from the plugin itself, and can pose security hazards if you aren't careful.

Considerations
--------------

*   There are port restrictions. You cannot use port 1194 or any port below 1024, except 80 and 443. If you try to use a blocked port, you will receive either a `403 Forbidden` or `ERR_ACCESS_DENIED` error.
*   For each Roblox game server, there is a limit of 500 HTTP requests per minute. Exceeding this may cause request-sending functions to stall entirely for about 30 seconds.
*   Requests cannot be made to any Roblox website, such as [www.roblox.com](http://www.roblox.com).
*   Web requests can fail for many reasons, so it is important to “code defensively” (use `pcall`) and have a plan for when requests fail.
*   Although the `http://` protocol is supported, you should use `https://` wherever possible.
*   Requests sent should provide a secure form of authentication, such as a pre-shared secret key, so that bad actors cannot pose as one of your Roblox game servers.
*   Be aware of the general capacity and rate-limiting policies of the web servers to which requests are being sent.