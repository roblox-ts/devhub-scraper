**GetEquippedEmotes** returns an array of tables which indicate the `Name` and `Slot` of each equipped emote as it was set by [SetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEquippedEmotes).

Example
-------

```lua
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes{Salute = {3360689775}, Agree = {4849487550}}
hd:SetEquippedEmotes({"Salute", "Agree"})
-- Iterate over the equipped emotes:
for _, t in pairs(hd:GetEquippedEmotes()) do
    print(("In slot %d: emote %s is equipped"):format(t.Slot, t.Name))
end
``` 

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [SetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEquippedEmotes), which sets the currently equipped emotes and changes what this function returns
*   [EquippedEmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EquippedEmotesChanged), which fires when the function returned by this value may have changed