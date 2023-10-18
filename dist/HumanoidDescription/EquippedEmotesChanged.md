**EquippedEmotesChanged** fires when the equipped emotes are set on this
description using
[`SetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEquippedEmotes). It
provides the new equipped emotes in a table like that returned by
[`GetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEquippedEmotes).
#### Example
```lua
local hd = Instance.new("HumanoidDescription")
hd.EquippedEmotesChanged:Connect(function (equippedEmotes)
    print(("We have %d emotes equipped"):format(#equippedEmotes))
    for _, t in pairs(equippedEmotes) do
        print(("In slot %d: emote %s is equipped"):format(t.Slot, t.Name))
    end
end)
hd:SetEquippedEmotes({"Salute", "Agree"}) --> We have 2 emotes equipped
```

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`SetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEquippedEmotes), which
fires this event
- [`GetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GetEquippedEmotes), which
can be used to query the currently equipped emotes without this event
firing