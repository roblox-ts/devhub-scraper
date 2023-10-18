**GetEquippedEmotes** returns an array of tables which indicate the `Name`
and `Slot` of each equipped emote as it was set by
[`SetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEquippedEmotes).
#### Example
```lua
local hd = Instance.new("HumanoidDescription")
hd:SetEmotes{Salute = {3360689775}, Agree = {4849487550}}
hd:SetEquippedEmotes({"Salute", "Agree"})
-- Iterate over the equipped emotes:
for _, t in pairs(hd:GetEquippedEmotes()) do
    print(("In slot %d: emote %s is equipped"):format(t.Slot, t.Name))
end
```

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`SetEquippedEmotes`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#SetEquippedEmotes), which
sets the currently equipped emotes and changes what this function
returns
- [`EquippedEmotesChanged`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#EquippedEmotesChanged),
which fires when the function returned by this value may have changed