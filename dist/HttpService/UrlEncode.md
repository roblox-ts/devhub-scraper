The UrlEncode function [percent-encodes](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Percent-encoding) a given string so that
reserved characters properly encoded with '%' and two hexadecimal
characters.

This is useful when formatting URLs for use with
[`HttpService:GetAsync()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#GetAsync)/[`HttpService:PostAsync()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#PostAsync), or POST
data of the media type `application/x-www-form-urlencoded`
([`Enum.HttpContentType.ApplicationUrlEncoded`](https://create.roblox.com/docs/reference/engine/enums/HttpContentType)).

For instance, when you encode the URL
` https://www.roblox.com/discover#/`, this function returns
`https%3A%2F%2Fwww%2Eroblox%2Ecom%2Fdiscover%23%2F`.