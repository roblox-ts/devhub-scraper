Returns a [`AudioPages`](https://create.roblox.com/docs/reference/engine/classes/AudioPages) object containing the result of the given
search. Will not return fields with empty values.

Note that this method has a low HTTP request limit and can throw an error,
so it should always be wrapped in `pcall()` for error handling. Possible
error messages include:
| Error Message | Reason |
| - | - |
| HTTP 429 (Too Many Requests) | [`AssetService:SearchAudio()`](https://create.roblox.com/docs/reference/engine/classes/AssetService#SearchAudio) has been called too many times. |
| Unexpected type for data, expected array got void | The keyword argument was filtered. |