The JSONDecode function transforms a JSON object or array into a Lua
[table](https://create.roblox.com/docs/luau/tables) with the following characteristics:

- Keys of the table are strings or numbers but not both. If a JSON object
contains both, string keys are ignored.
- An empty JSON object generates an empty Lua table `{}`.
- If the *input* string is not a valid JSON object, this function will
throw an error.

To encode a Lua table into a JSON object, you can use
[`HttpService's`](https://create.roblox.com/docs/reference/engine/classes/HttpService) [`HttpService:JSONEncode()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#JSONEncode)
function.

Many web endpoints use JSON, as it is commonly used on the Internet. Visit
[JSON.org](https://create.roblox.com/docs/https://www.json.org) to become more familiar with the format.

This method can be used regardless of whether HTTP Requests are
[`enabled`](https://create.roblox.com/docs/reference/engine/classes/HttpService#HttpEnabled).