**SetEquippedEmotes** sets the currently equipped emotes given an array of emote names as they were passed to [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote) or [SetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes). It can also take an array of tables similar to that returned by [GetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEquippedEmotes). Calling this function fires [EquippedEmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EquippedEmotesChanged).

Example
-------

```Lua
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes{Salute = {3360689775}, Agree = {4849487550}}
-- Can provide either an array of strings... (index is slot number)
hd:SetEquippedEmotes({"Salute", "Agree"})
-- ...or an array of tables as returned by GetEquippedEmotes (Slot and Name keys set)
hd:SetEquippedEmotes({{Slot = 1, Name = "Salute"}, {Slot = 2, Name = "Agree"}})
``` 

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [GetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEquippedEmotes), which returns a value describing the equipped emotes set by this function
*   [EquippedEmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EquippedEmotesChanged), which fires when this function is called