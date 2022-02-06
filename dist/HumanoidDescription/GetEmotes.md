**GetEmotes** returns a dictionary of emotes that have been [added](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote) or [set](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) to this description. The keys of this dictionary are the names of the emotes, and the values are a non-empty array of emote IDs for that name.

Example
-------

local hd = Instance.new("HumanoidDescription")
hd:AddEmote("Salute", 3360689775)
local emotes = hd:GetEmotes()
for name, ids in pairs(emotes) do
    print(("The emote %s has %d ids:"):format(name, #ids))
    for \_, id in pairs(ids) do
        print(id)
    end
end

See also
--------

*   [HumanoidDescription System](https://developer.roblox.com/en-us/articles/humanoiddescription-system), for more information on HumanoidDescriptions
*   [SetEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEmotes) and [AddEmote](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/AddEmote), which can add emotes that may be returned by this function
*   [EmotesChanged](https://developer.roblox.com/en-us/api-reference/event/HumanoidDescription/EmotesChanged), which fires with the value returned this function after it may have changed