The JSONEncode function transforms a Lua [table](https://create.roblox.com/docs/luau/tables)
into a JSON object or array based on the following guidelines:

- 

Keys of the table must be either strings or numbers. If a table contains
both, an array takes priority (string keys are ignored).

- 

An empty Lua table `{}` generates an empty JSON array.

- 

The value `nil` is never generated.

- 

Cyclic table references cause an error.

This function allows values such as `inf` and `nan`, which are not valid
JSON. This may cause problems if you want to use the outputted JSON
elsewhere.

To reverse the encoding process, and decode a JSON object, you can use
[`HttpService's`](https://create.roblox.com/docs/reference/engine/classes/HttpService) [`HttpService:JSONDecode()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#JSONDecode)
function.

Many web endpoints use JSON, as it is commonly used on the Internet. Visit
[JSON.org](https://create.roblox.com/docs/https://www.json.org) to become more familiar with the format.

This method can be used regardless of whether HTTP Requests are
[`enabled`](https://create.roblox.com/docs/reference/engine/classes/HttpService#HttpEnabled).