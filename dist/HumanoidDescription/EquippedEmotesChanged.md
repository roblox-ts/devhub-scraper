**EquippedEmotesChanged** fires when the equipped emotes are set on this description using [SetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEquippedEmotes). It provides the new equipped emotes in a table like that returned by [GetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEquippedEmotes).

Example
-------

local hd = Instance.new("HumanoidDescription")
hd.EquippedEmotesChanged:Connect(function (equippedEmotes)
    print(("We have %d emotes equipped"):format(#equippedEmotes))
    for \_, t in pairs(equippedEmotes) do
        print(("In slot %d: emote %s is equipped"):format(t.Slot, t.Name))
    end
end)
hd:SetEquippedEmotes({"Salute", "Agree"}) --> We have 2 emotes equipped

See also
--------

*   [HumanoidDescription System](https://developer.roblox.com/en-us/articles/humanoiddescription-system), for more information on HumanoidDescriptions
*   [SetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/SetEquippedEmotes), which fires this event
*   [GetEquippedEmotes](https://developer.roblox.com/en-us/api-reference/function/HumanoidDescription/GetEquippedEmotes), which can be used to query the currently equipped emotes without this event firing