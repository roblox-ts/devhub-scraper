The JSONEncode function transforms a Lua [table](http://robloxdev.com/articles/Table) into a [JSON object or array](http://robloxdev.com/articles/JSON-Storage-Format) based on the following guidelines:

*   Keys of the table must be either strings or numbers. If a table contains both, an array takes priority (string keys are ignored).
*   An empty Lua table `{}` generates an empty JSON array.
*   The value `nil` is never generated.
*   Cyclic table references cause an error.

This function allows values such as _inf_ and _nan_, which are not valid JSON. This may cause problems if you want to use the outputted JSON elsewhere.

To reverse the encoding process, and decode a JSON object, you can use [HttpService's](https://developer.roblox.com/en-us/api-reference/class/HttpService) [HttpService:JSONDecode](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONDecode) function.

Many web endpoints use JSON, as it is commonly used on the Internet. Visit [JSON.org](http://robloxdev.com/articles/JSON-Storage-Format) to become more familiar with the format.

This method can be used regardless of whether HTTP Requests are [enabled](https://developer.roblox.com/en-us/api-reference/property/HttpService/HttpEnabled).