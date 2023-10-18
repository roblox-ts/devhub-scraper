This property is the content ID of the sound file a [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) object
is associated with. Once a sound has been uploaded to Roblox the content
ID can be found in the uploaded sound's URL.

It's important to remember the URL is not the same as the content ID. It
will work when pasted directly into the SoundId property of a
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) in Roblox studio, as Studio will automatically correct it,
however if it is being set from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) then the correct content
ID will need to be used, using the number from the URL. For example:
```lua
"https://www.roblox.com/catalog/9120386436" -- Web URL (will not work)
"http://www.roblox.com/asset/?id=9120386436" -- Content ID (will work)
"rbxassetid://9120386436" -- Content ID (alternative version, will work)
```