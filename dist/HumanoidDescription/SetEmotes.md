**SetEmotes** sets all of the emotes on this description given a table similar to that returned by [GetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEmotes). It fires [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged)

Example
-------

local emotes = {
    Salute = {3360689775}, -- Syntax note: can also use \["Salute"\] = ...
    Agree = {4849487550},
    Disagree = {4849495710}
}
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes(emotes)

See also
--------

*   [HumanoidDescription System](https://developer.roblox.com/en-us/articles/HumanoidDescription-System), for more information on HumanoidDescriptions
*   [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote) and [RemoveEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/RemoveEmote) which can modify the added emotes on an individual level
*   [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged), which fires when this function is called