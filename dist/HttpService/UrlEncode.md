The UrlEncode function [percent-encodes](https://en.wikipedia.org/wiki/Percent-encoding) a given string so that reserved characters properly encoded with '%' and two hexadecimal characters.

This is useful when formatting URLs for use with [HttpService:GetAsync](https://developer.roblox.com/en-us/api-reference/function/HttpService/GetAsync)/[HttpService:PostAsync](https://developer.roblox.com/en-us/api-reference/function/HttpService/PostAsync), or POST data of the media type `application/x-www-form-urlencoded` (`Enum/HttpContentType|Enum.HttpContentType.ApplicationUrlEncoded`).

For instance, when you encode the URL:

```Lua
http://robloxdev.com/api-reference/function/HttpService/UrlEncode
``` 

the function returns the string:

```Lua
http%3A%2F%2Frobloxdev%2Ecom%2Fapi%2Dreference%2Ffunction%2FHttpService%2FUrlEncode
```