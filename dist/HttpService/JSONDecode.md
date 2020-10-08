The JSONDecode function transforms a [JSON object or array](http://robloxdev.com/articles/JSON-Storage-Format) into a Lua [table](http://robloxdev.com/articles/Table) with the following characteristics:

*   Keys of the table are strings or numbers but not both. If a JSON object contains both, string keys are ignored.
*   An empty JSON object generates an empty Lua table `{}`.
*   If the _input_ string is not a valid JSON object, this function will throw an error.

To encode a Lua table into a JSON object, you can use `HttpService|HttpService's` [HttpService:JSONEncode](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONEncode) function.

Many web endpoints use JSON, as it is commonly used on the Internet. Visit [JSON.org](http://www.json.org/) to become more familiar with the format.

This method can be used regardless of whether HTTP Requests are [enabled](https://developer.roblox.com/en-us/api-reference/property/HttpService/HttpEnabled).